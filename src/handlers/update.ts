import prisma from '../db';

// get all updates
export const getUpdates = async (req, res) => {
  // we will get all updates for a user for now
  // in this course we don't have an UI which consumes this
  
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id
    },
    include: {
      updates: true
    }
  })

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates]
  }, [])
  res.json({ data: updates })
}

// get update by Id
export const getOneUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id
    }
  })

  res.json({ data: update })
}

// Create
export const createNewUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.id
    }
  })

  if (!product) {
    // does not belong to user
    return res.json({message: 'nope'})
  }

  const update = await prisma.update.create({
    data: req.body
  })

  res.json({data: update})
}

// Update
export const updateUpdate = async (req, res) => {
  // there is a better way!
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true
    }
  })

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates]
  }, [])

  const match = updates.find(update => update.id === req.params.id)

  if (!match) {
    // handle this
    res.json({message: 'nope'})
  }

  const updatedUpdate = await prisma.update.update({
    where: {
      id: req.params.id
    },
    data: req.body
  })

  res.json({data: updatedUpdate})
}

// Deleta
export const deleteUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true
    }
  })

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates]
  }, [])

  const match = updates.find(update => update.id === req.params.id)

  if (!match) {
    // handle this
    res.json({message: 'nope'})
  }

  const deletedUpdate = await prisma.update.delete({
    where: {
      id: req.params.id
    }
  })

  res.json({data: deletedUpdate})
}