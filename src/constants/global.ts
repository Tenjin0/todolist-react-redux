console.log(process.env)

for (const key in process.env) {
        const element = process.env[key];
        console.log(element)
}

export default process.env
