const hobby = ["Sewing! Maybe try to hem that old shirt or patch up those old jeans!", "Cooking! Perhaps a new recipe will inspire you!", "Painting! You could become the new Picasso!"];

module.exports = {
    
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getInspiration: (req, res) => {

        let randomIndex = Math.floor(Math.random() * inspiration.length);
        let randomInspiration = inspiration[randomIndex];
      
        res.status(200).send(randomInspiration);
    },
    getHobby: (req, res) => {

        let randomIndex = Math.floor(Math.random() * hobby.length)
        let randomHobby = hobby[randomIndex]

        res.status(200).send(randomHobby)
    },
    createHobby: (req, res) => {
        hobby.push(req.body.hobby);
        res.status(200).send();
    },
    deleteHobby: (req, res) => {
        const name = req.params.name
        for(let i = 0; i < hobby.length; i++) {
            if (hobby[i].name === name) {
                hobby.splice(i, 1);
            }
        }
        res.status(200).send()
    }
}