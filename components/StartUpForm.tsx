"use client";
import React, { useState } from 'react';
import { z } from 'zod';
import MDEditor from '@uiw/react-md-editor';
import { Button } from './ui/button';
import { SendIcon } from 'lucide-react';
import { useActionState } from 'react';
import { formSchema } from '@/lib/validation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import {createPitch} from '@/lib/action';

const StartUpForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState('');
    const router = useRouter();

    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get('title') as string,
                description: formData.get('description') as string,
                category: formData.get('category') as string,
                link: formData.get('link') as string,
                pitch,
            };

            // Validating form values with Zod schema
            await formSchema.parseAsync(formValues);

            console.log('Form values are valid', formValues);

            const result = await createPitch(prevState, formData, pitch);
            if (result.status === 'SUCCESS') {
                toast.success('Product created successfully');
                router.push(`/startup/${result._id}`);
                return { ...prevState, status: 'SUCCESS' };
            }

        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;
                setErrors(fieldErrors as unknown as Record<string, string>);
                toast.error('Please fill all the fields correctly');
                return { ...prevState, error: 'Validation failed', status: 'ERROR' };
            } else {
                // Handling any other unexpected errors
                toast.error('Unexpected error occurred');
                return {
                    ...prevState,
                    error: 'Unexpected error occurred',
                    status: 'ERROR',
                };
            }
        }
    };

    const [state, formAction, isPending] = useActionState(handleFormSubmit, { error: '', state: 'INITIAL' });

    return (
        <form action={formAction} className="startup-form space-y-4 w-full max-w-3xl mx-auto">
            <div className="flex flex-col">
                <label htmlFor="title" className="startup-form_label">
                    Title
                </label>
                <input
                    className="startup-form_input"
                    id="title"
                    name="title"
                    required
                    placeholder="Product Title"
                />
                {errors.title && <p className="startup-form_error">{errors.title}</p>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="description" className="startup-form_label">
                    Description
                </label>
                <textarea
                    className="startup-form_textarea"
                    id="description"
                    name="description"
                    required
                    placeholder="Product Description"
                />
                {errors.description && <p className="startup-form_error">{errors.description}</p>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="category" className="startup-form_label">
                    Category
                </label>
                <input
                    className="startup-form_input"
                    id="category"
                    name="category"
                    required
                    placeholder="Product Category (e.g., UAV, Drone)"
                />
                {errors.category && <p className="startup-form_error">{errors.category}</p>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="link" className="startup-form_label">
                    Image URL
                </label>
                <input
                    className="startup-form_input"
                    id="link"
                    name="link"
                    required
                    placeholder="Product Image URL"
                />
                {errors.link && <p className="startup-form_error">{errors.link}</p>}
            </div>

            <div className="flex flex-col" data-color-mode="light">
                <label htmlFor="pitch" className="startup-form_label">
                    Pitch
                </label>
                <MDEditor
                    value={pitch}
                    onChange={(value: string | undefined) => setPitch(value || '')}
                    id="pitch"
                    preview="edit"
                    height={300}
                    style={{ borderRadius: 20, overflow: 'hidden' }}
                    textareaProps={{
                        placeholder: 'Briefly describe your product',
                    }}
                    previewOptions={{
                        disallowedElements: ['style'],
                    }}
                />
                {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
            </div>

            <Button className="startup-form_btn text-white text-lg font-work-sans" type="submit" disabled={isPending}>
                {isPending ? 'Creating...' : 'Create Product'}
                <SendIcon className="size-6 ml-2" />
            </Button>
        </form>
    );
};

export default StartUpForm;
