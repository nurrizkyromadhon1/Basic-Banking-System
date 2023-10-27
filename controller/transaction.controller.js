const { ResponseTemplate } = require('../helper/template.helper')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


function TestTransaction(req, res) {
    let resp = ResponseTemplate(null, 'success', null, 200)
    res.json(resp)
}

async function Insert(req, res) {

    const { source_account_id, destination_account_id, amount } = req.body

    const payload = {
        source_account_id,
        destination_account_id,
        amount
    }

    try {
        const transaction = await prisma.transaction.create({
            data: payload
        })

        let resp = ResponseTemplate(transaction, 'success', null, 200)
        res.json(resp)
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.json(resp)
        return


    }
}

async function Get(req, res) {

    const { source_account_id, destination_account_id, amount } = req.query

    const payload = {}

    if (source_account_id) {
        payload.source_account_id = source_account_id
    }

    if (destination_account_id) {
        payload.destination_account_id = destination_account_id
    }
    if (amount) {
        payload.amount = amount
    }    

    try {
        const page = parseInt(req.query.page) || 1; // Nomor halaman
        const perPage = parseInt(req.query.perPage) || 10; // Jumlah item per halaman
        const skip = (page - 1) * perPage;
        const transaction = await prisma.transaction.findMany({
            skip,
            take: perPage,
            where: payload            
        });

        let resp = ResponseTemplate(transaction, 'success', null, 200)
        res.json(resp)
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.json(resp)
        return


    }
}

async function GetByPK(req, res) {

    const { transaction } = req.params

    try {
        const transaction1 = await prisma.transaction.findUnique({
            where: {
                id: Number(transaction)
            },            
        })

        let resp = ResponseTemplate(transaction1, 'success', null, 200)
        res.json(resp)
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.json(resp)
        return


    }
}

async function Update(req, res) {

    const { source_account_id, destination_account_id, amount } = req.body
    const { transaction } = req.params

    const payload = {}

    if (!source_account_id && !destination_account_id && !amount ) {
        let resp = ResponseTemplate(null, 'bad request', null, 400)
        res.json(resp)
        return
    }

    if (source_account_id) {
        payload.source_account_id = source_account_id
    }

    if (destination_account_id) {
        payload.destination_account_id = destination_account_id
    }
    if (amount) {
        payload.amount = amount
    }


    try {
        const transaction1 = await prisma.transaction.update({
            where: {
                id: Number(transaction)
            },
            data: payload
        })

        let resp = ResponseTemplate(transaction1, 'success', null, 200)
        res.json(resp)
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.json(resp)
        return


    }
}

async function Delete(req, res) {

    const { transaction } = req.params

    try {
        const transaction1 = await prisma.transaction.delete({
            where: {
                id: Number(transaction)
            },
        })

        let resp = ResponseTemplate(transaction1, 'success', null, 200)
        res.json(resp)
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.json(resp)
        return
    }
}






module.exports = {
    TestTransaction,
    Insert,
    Get,
    GetByPK,
    Update,
    Delete
}