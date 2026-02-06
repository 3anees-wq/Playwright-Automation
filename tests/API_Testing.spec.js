//API Testing

 

import {test,expect} from '@playwright/test'

let productid

test('Handling Get Method', async ({request}) => {

    const response = await request.get('https://api.restful-api.dev/objects/7')
   console.log(response.status())

    const code = response.status()

    expect(code).toBe(200)

    const body = await response.json()

    const id = body.id

    expect(id).toBe("7")

})


test('Handling Post Method', async ({request}) => {

    const response = await request.post('https://api.restful-api.dev/objects', {data: {"name": "Apple MacBook Pro 16","data": {"year": 2019,"price": 1849.99,"CPU model": "Intel Core i9","Hard disk size": "1 TB"}}})

    expect(response.status()).toBe(200)

    const body = await response.json()

    expect(body.name).toBe('Apple MacBook Pro 16')

    productid = body.id

    console.log(body.id)

})


test('Handling Put Method', async ({request}) => {

    const response = await request.put('https://api.restful-api.dev/objects/'+productid, {data:{"name": "Apple MacBook Pro 16","data": {"year": 2019,"price": 2049.99,"CPU model": "Intel Core i9","Hard disk size": "1 TB","color": "silver"}},headers:{"Accept":"application/json"}})

    expect(response.status()).toBe(200)

    const body = await response.json()

    expect(body.id).toBe(productid)

})

 

test('Handling Patch Method', async ({request}) => {

    const response = await request.patch('https://api.restful-api.dev/objects/'+productid, {data: {"name": "Apple MacBook Pro 16 (Updated Name)"}})

    expect(response.status()).toBe(200)

    const body = await response.json()

    expect(body.id).toBe(productid)

})

 

test('Handling Delete Method', async ({request}) => {

    const response = await request.delete('https://api.restful-api.dev/objects/'+productid)

    expect(response.status()).toBe(200)

    const body = await response.json()

    expect(body.message).toBe('Object with id = '+productid+' has been deleted.')

 

})