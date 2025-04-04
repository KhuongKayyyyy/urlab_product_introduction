import React from 'react';
import Ping from './Ping';
import { client } from '@/sanity/lib/client';
import {STARTUP_VIEW_QUERY} from '@/sanity/lib/query';
import { WriteClient } from '@/sanity/lib/write-client';  
import {formatView} from '@/lib/utils';
import { after } from 'next/server'
const View =async({id} :{id: string}) => {
    const {views: totalViews } = await client.withConfig({
        useCdn: false    }).fetch(STARTUP_VIEW_QUERY, {id});

    after( 
        async () => 
    await WriteClient.patch(id).set({views: totalViews + 1}).commit()
    )
    return <div className = "view-container">
        <div className = "absolute -top-2 -right-2">
            <Ping></Ping>
        </div>

        <p className = "view-text">
            <span className ="font-black">{formatView(totalViews)}</span>
        </p>
    </div>
}

export default View;