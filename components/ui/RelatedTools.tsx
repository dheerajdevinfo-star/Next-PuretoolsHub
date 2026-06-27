// components/RelatedTools.tsx

import React from 'react'
import Link from 'next/link'

type ToolItem = {
    title: string
    description: string
    link: string
}

type RelatedToolsProps = {
    tools: ToolItem[]
}

const RelatedTools = ({ tools }: RelatedToolsProps) => {
    return (
        <div className="relatedtools_flex">
            {tools.map((tool, index) => (
                <Link
                    href={tool.link}
                    className="relatedtools_card"
                    key={index}
                >
                    <h4>{tool.title}</h4>
                    <p>{tool.description}</p>
                </Link>
            ))}
        </div>
    )
}

export default RelatedTools