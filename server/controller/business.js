const businessData = require('../data.json')

const getBusinessData = (req, res) => {
  try {
    res.status(200).json(businessData)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getSingleBusinessData = (req, res) => {
  const companyId = parseInt(req.params.id)

  const company = businessData.books.find((company) => company.id === companyId)
  console.log(company)

  if (company) {
    res.status(200).json(company)
  } else {
    res.status(404).json({ error: 'Company not found for the given ID.' })
  }
}

module.exports = { getBusinessData, getSingleBusinessData }
