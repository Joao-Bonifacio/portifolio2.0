import type { NextApiRequest, NextApiResponse } from "next"
import { Client } from "@notionhq/client"

const notion = new Client({
    auth: process.env.NOTION_API_KEY

})

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    const { name, email, message } = req.body
    await notion.pages.create({
        parent: {
            database_id: process.env.NOTION_DATABASE_ID || ''
        },
        properties:{
            Name: {
                type: "title",
                title: [{
                    type: "text",
                    text: { content:  name}
                }]
            },

            Email: {
                type: "email",
                email: email
            },

            Message: {
                type: "rich_text",
                rich_text: [{
                    type: "text",
                    text: {
                        content: message
                    }
                }]
            }
        }
    })
    .then(() => res.status(201).json({message: "Sucesso"}))
    .catch((error) => {
        console.log(error.message) 
        res.status(500).json({message: 'Algo deu errado'})
    })
}
