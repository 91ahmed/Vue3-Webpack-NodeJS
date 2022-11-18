class indexController 
{
	index (req, res)
	{
		res.render('index')
	}
}

module.exports = new indexController();