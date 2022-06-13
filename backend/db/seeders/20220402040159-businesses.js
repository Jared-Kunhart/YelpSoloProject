'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Businesses', [
        { title: 'Outlander Club', description: "The Outlande, a facility founded by Volven Roxe and owned by the Baath brothers, was a hangout for gamblers and glitterati of many species on Vos Gesal Street in Coruscant's Uscru District.", location: "Uscr Entertainment District, Coruscant", imageUrl: "https://www.therpf.com/forums/attachments/kenobioutlanderbar02-jpg.1576175/", ownerId: 2 },
        { title: 'Sanctuary (cantina)', description: "The Sanctuary, also known as Garsa's Sanctuary,was a cantina located in Mos Espa, Tatooine, during the New Republic Era. The female Twi'lek Madam Garsa Fwip owned the cantina.The establishment was complete with a bar, gambling tables, and live music, and was even alive with helmet cleaning. At least two individuals were employed there, a male Twi'lek server and a female Twi'lek server. The cantina was destroyed when two members of the Pyke Syndicate left a bomb, disguised as a camtono.", location: "Mos Espa,  Tatooine", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/mos-eisley-cantina-main_4786e80c.jpeg?region=164%2C0%2C953%2C536&width=768", ownerId: 7 },
        { title: "Leechee's Junk Emporium", description: "Leechee's Junk Emporium was a stall at the marketplace on Vargo Spaceport on the planet Varkana. It was run by Lechee, a Gran vendor who was secretly a contact for the First Order.", location: "Vargo Spaceport, Varkana", imageUrl: "https://www.ocregister.com/wp-content/uploads/2019/03/OCR-L-DIS-SHOPS-0305-1222.jpg?w=620", ownerId: 4 },
        { title: "Miss Mylla's Saloon", description: "Miss Mylla's Saloon was an entertainment house and inn in the city of Bartyn's Landing in Lamaredd. Owned and managed by the pretty and cunning Miss Mylla, it provided pleasure through several means and was the busiest locale in the Center Sphere District during the last decades of the Galactic Republic.", location: "Bartyn's Landing, Lamaredd", imageUrl: "https://i1.wp.com/wpdash.medianewsgroup.com/wp-content/uploads/2021/04/ArtOfSWGE_114_Top_copy.jpg?fit=620%2C9999px&ssl=1", ownerId: 10 },
        { title: 'Coruscant City Tours', description: "Coruscant City Tours was an organization based out of the Tourist Center on Coruscant in 32 BBY, overseen by the Tourist Director. For the price of a ticket, a passenger could embark on a tour transport and take a famous tour of Coruscant's sites, including Monument Plaza, Calocour Heights, the Jedi Temple, and the Senate Building. Tickets were considered difficult to obtain.", location: "Coruscant", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C96%2C1536%2C768", ownerId: 5 },
        { title: "Droid Repair", description: "Droid Repair was a business located near Cid's Parlor in Ord Mantell City on the planet Ord Mantell. It offered repair service for droids which was advertised on a white and green sign.", location: "Ord Mantell City, Ord Mantell", imageUrl: "https://starwarsblog.starwars.com/wp-content/uploads/2017/10/droid-repair-bay-tall-1536x864.jpg", ownerId: 9 },
        { title: "Ania Solo's junkyard", description: "Ania Solo owned a junkyard on the moon of backwater planet of Carreras Minor in the Carreras system around 138 ABY. Inhabited by power-eating gesaw rats, who often went hungry, and a hulking security droid, the yard was large enough for a ship to land in one section unnoticed by people in another.", location: "Carreras Minor's moon", imageUrl: "https://c4.wallpaperflare.com/wallpaper/890/90/388/star-wars-star-wars-battlefront-ii-2017-junkyard-tatooine-star-wars-hd-wallpaper-preview.jpg", ownerId: 10 },
        { title: 'Starship Outfitters', description: "Starship Outfitters was a small business run by the Rodian Tulagn on the planet Wroona. On one of the main boulevards of Wroona spaceport, it was packed full of supplies to cater to the needs of spacers. While some tough-looking guards watched the front, Tulagn would work the back counter.", location: "Wroona", imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2019/07/ksldfgd943.jpg", ownerId: 6 },
        { title: 'Ingo speeder shop', description: "The speeder shop on Ingo was a garage owned and operated by Thall Joben and Jord Dusat during the early years of the New Order. It was here that the two created the White Witch, a landspeeder that Joben later used to win the Boonta Speeder Race.", location: "Ingo", imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F02%2Fstar-wars-disney-marketplace-SWGEBUY0519.jpg&q=60", ownerId: 5 },
        { title: 'Gelgelar Outfitters', description: "Gelgelar Outfitters was a general store that was located within the Gelgelar Free Port on the world of Gelgelar. It was maintained by Qulo Ecls, who owned the venue during the Galactic Civil War.", location: "Gelgelar Free Port", imageUrl: "https://orlandoinformer.com/wp-content/uploads/2019/05/Black-Spire-Outfitters-in-Star-Wars-Galaxys-Edge.jpg", ownerId: 8 },
        { title: 'Coruscant', description: "It's a city and a planet; how could you not want to visit Coruscant? From Dex's Diner to the Jedi Temple, the planet offers endless sights and activities. It's recognized as the center of power and culture in the galaxy and home to billions of citizens that live in layer upon layers of buildings.", location: "Coruscant", imageUrl: "https://starwarsblog.starwars.com/wp-content/uploads/2015/01/Coruscant.jpeg", ownerId: 6 }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Businesses', null, {});
  }
};
