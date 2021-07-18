import * as React from "react";

const IndexPage = () => {
    const code = `
    {
        "hosting": {
            "public": "public",
            "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
            "redirects": [
                {
                    "source": "/works",
                    "destination": "/it-worked/",
                    "type": 301
                },
                {
                    "regex": "/it_\\(works_with_regex\\)",
                    "destination": "/it-worked/",
                    "type": 301
                },
                {
                    "source": "/it_(doesnt_work)",
                    "destination": "/it-worked/",
                    "type": 301
                },
                {
                    "source": "/it_%28doesnt_work%29",
                    "destination": "/it-worked/",
                    "type": 301
                }
            ]
        }
    }
    `;
    return (
        <div>
            <h1>Redirect Tests</h1>
            <p>This one works:</p>
            <ul>
                <li>
                    <a href="/works">/works</a>
                </li>
                <li>
                    <a href="/it_(works_with_regex)">/it_(works_with_regex)</a>
                </li>
            </ul>
            <p>This doesn't work:</p>
            <ul>
                <li>
                    <a href="/it_(doesnt_work)">/it_(doesnt_work)</a>
                </li>
            </ul>
            <p>
                Here's the code. I tried parentheses and encoding them as{" "}
                <code>%28</code> and <code>%29</code>.
            </p>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default IndexPage;
