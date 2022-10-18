const flightData = require('../flightData');


exports.displayAll = (req, res) => {
    res.status(200).send(flightData);
}

exports.displayOne = (req, res) => {
    const queryID = req.params.id;
    const flight = flightData.find(flight => flight.id == queryID)
    if(flight){
        res.status(200).send(flight);
    } else {
        res.status(404).json({"Error": "Flight could not be found on our server."});
    }
}

exports.addFlight = (req, res) => {
    if(req.body.hasOwnProperty('title') && req.body.hasOwnProperty('time') 
        && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('date')){
            const newFlight = {
                id: flightData.length + 1,
                title: req.body.title,
                time: req.body.time,
                price: req.body.price,
                date: req.body.date
            }
            flightData.push(newFlight);
            res.status(201).send("Flight has been successfully added.");
        }
    else {
        res.status(400).json({"Error": "Data could not be added. One or more required fields missing."});
    }
}

exports.updateFlight = (req, res) => {
    const queryID = req.params.id;
    const flight = flightData.find(flight => flight.id == queryID)
    if(flight){
        if(req.body.title != null) flight.title = req.body.title;
        if(req.body.time != null) flight.time = req.body.time;
        if(req.body.price != null) flight.price = req.body.price;
        if(req.body.date != null) flight.date = req.body.date;
        res.status(200).send("Flight has been successfully updated.");
    } else {
        res.status(404).json({"Error": "Flight could not be found on our server."});
    }
}

exports.deleteFlight = (req, res) => {
    const queryID = req.params.id;
    const flight = flightData.find(flight => flight.id == queryID)
    if(flight){
        const index = flightData.indexOf(flight);
        flightData.splice(index, 1);
        res.status(200).json({"Success": "Flight was successfully deleted."});
    } else {
        res.status(404).json({"Error": "Flight could not be found on our server."});
    }
}

