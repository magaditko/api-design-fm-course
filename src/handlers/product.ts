import prisma from '../db';

// get all products
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id
    },
    include: {
      products: true
    }
  })

  res.json({ data: user.products })
}

// get product by Id
export const getOneProduct = async (req, res) => {
  const id = req.params.id
  // we can use findUnique if we index inside the schema @@index([id, belongsToId])
  // for optimization
  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id
    }
  })

  res.json({ data: product })
}

export const createNewProduct = async (req, res) => {

}

export const updateProduct = async (req, res) => {
  
}

export const deleteProduct = async (req, res) => {
  
}