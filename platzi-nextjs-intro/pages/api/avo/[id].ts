import {NextApiResponse, NextApiRequest} from 'next'
import DB from '../../../database/db'
const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB()
    const {id} = req.query
    const getProductById = await db.getById(id as string);
    res.status(200).json({data: getProductById})
}
export default allAvos