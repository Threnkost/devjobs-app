import fs from 'fs'
import path from 'path'

export const fetchData = () => {
    const filePath = path.join(process.cwd(), 'src', 'data.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData)
}