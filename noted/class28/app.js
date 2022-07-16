window.onload = function () {
    main();
}

function main() {
    // const h1 = document.createElement('h1');
    // const p = document.createElement('p');
    // const div = document.createElement('div')

    // h1.innerText = "Hello World";
    // p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam dignissimos voluptas necessitatibus quidem dolorum numquam incidunt tempora eos impedit a saepe, debitis sapiente temporibus placeat dicta obcaecati consectetur facilis."

    // div.appendChild(h1);
    // div.appendChild(p);

    // document.body.appendChild(div);

    const app = container ([

            Text('h1', 'hello world'),
            Text('p', 'This is a simple pargraph'),
    ]);
    document.getElementById('root').appendChild(app)
};

function container(children) {
    const div = document.createElement('div');

    children.forEach((ch) => div.appendChild(ch));

    return div
}

function Text (tag, value) {
    const text = document.createElement(tag);
    text.innerText = value;
    return text; 
}