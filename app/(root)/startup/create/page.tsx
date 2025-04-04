import StartUpForm from '@/components/StartUpForm';
import React from 'react';
import {auth} from '@/auth';
import {redirect} from 'next/navigation';

const Page = async() => {
    const session = await auth();
    if (!session) {
        redirect('/');
    }
    return (
        <>
            <section className="pink_container !min-h-[230px]">
                <h1 className="heading">
                    Create new product
                </h1>
            </section>

            <StartUpForm></StartUpForm>
        </>
    );
}

export default Page;
