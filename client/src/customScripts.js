const toTheTop = () => {
    setTimeout(function () {
        window.scrollTo({ behavior: 'smooth', top: '0px' });  
    }, 100)
}

module.exports = {
    toTheTop
}