// const hundredData = [{
//     "name": "YPPERLIG",
//     "shortDesc": "Table, ash, 78 3/4x35 3/8 \"",
//     "price": 229.00,
//     "rating": 4.7,
//     "reviewNum": 24,
//     "midDesc": "YPPERLIG table is a modern version of the traditional Scandinavian plank table. It has a stable metal underframe and 3 planks which comes in a flat-pack, making it easier to bring home.",
//     "imageSrc": ["https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0737127_PE740896_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0505507_PE633922_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0505509_PE633923_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0592759_PH146015_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0592760_PH146029_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0592862_PH146027_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0593819_PH146986_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0593824_PH146021_S5.JPG?f=xxxl"]
// }];
db = require('./index.js');

const name = ['NORDVIKEN', 'NORDEN', 'NORDVIKEN', 'KEJSARKRONA', 'LANEBERG', 'INGATORP', 'MORBYLANGA', 'EKOLN', 'HEMNES', 'NORRAKER'];
const shortDesc = ['Table, ash, 78 3/4x35 3/8 "', 'Extendable table, birch, 61/82 5/8x35 3/8 "', 'Extendable table, white, 51 1/8/74 3/4x31 1/2 "', 'Table, chrome plated, high gloss white, 53 1/8x33 1/2 "', 'Dining table, oak, white, 63x31 1/2 "', 'Table, oak veneer brown stained, 55x33 "'];
const midDesc = ['The oak top layer enhances the plank feeling and details like the floating table top and dovetail joints give the table a crafted look. A table full of character and plenty of room for family and friends.',
    'This spacious, wood dining table has a traditional feel and will soon become a natural gathering place in your home. The sturdy construction and smooth extension mechanism make it a long-lasting favorite.',
    'The simple design of this dining table will blend seamlessly into your dining area. And the smooth and simple extension lets you extend your dinner invitation without worrying about fitting everyone in.',
    'A durable dining table that makes it easy to have big dinners. A single person can extend the table and there’s plenty of room for chairs since the legs are always located at the corners of the table.',
    'It’s easy to extend when guests arrive – the legs of the table stay in the corner so everyone sits comfortably. A traditional look with details like turned legs give it that little extra.',
    'Everyone faces each other around a round table and you can make room for socializing by simply adding a leaf. A traditional look with details like the turned leg gives it that little extra.'];

const coverImg = ["https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/0.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/1.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/10.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/11.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/12.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/13.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/14.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/2.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/3.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/4.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/6.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/7.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/8.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/productImg/9.webp"]

const otherImg = ["https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/1b.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/1c.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/barkarby-extendable-table__0811395_PE771641_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/barkarby-extendable-table__0811396_PE771640_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/bjursta-extendable-table__0208534_PE243941_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/bjursta-extendable-table__0443681_PE594459_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/bjursta-extendable-table__0444423_PE594964_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/bjursta-extendable-table__0449376_PE598815_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/bjursta-extendable-table__0450189_PE599525_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table-black__0443665_PE594442_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table-black__0444439_PE594981_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table-black__0577868_PH135647_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table-black__0679697_PH154166_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table-white__0208605_PE307166_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table-white__0208606_PE323885_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table-white__0251739_PE390540_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table-white__0443671_PE594448_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table-white__0679702_PH146985_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table__0443679_PE594458_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table__0574515_PE668361_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table__0577866_PH137860_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table__0623223_PE691012_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table__0623224_PE691011_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table__0672379_PE716643_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/ingatorp-extendable-table__0679684_PH155032_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/laneberg-extendable-table-brown__0722956_PE733788_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/laneberg-extendable-table-brown__0722957_PE733787_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/laneberg-extendable-table-brown__0722959_PE733789_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/laneberg-extendable-table-brown__0744790_PE743402_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/laneberg-extendable-table-brown__0744791_PE743403_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/laneberg-extendable-table-white__0722955_PE733779_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/laneberg-extendable-table-white__0744787_PE743399_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/laneberg-extendable-table-white__0744788_PE743400_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/laneberg-extendable-table-white__0798297_PH161521_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/moerbylanga-table__0364529_PE548336_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/moerbylanga-table__0631751_PE695178_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/moerbylanga-table__0631802_PE695213_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/moerbylanga-table__0665850_PE713256_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/moerbylanga-table__0665852_PE713258_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/moerbylanga-table__0719382_PE732030_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/moerbylanga-table__0719383_PE732031_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-extendable-table-birch__0209008_PE224204_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-extendable-table-birch__0443668_PE594446_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-extendable-table-birch__0444416_PE594953_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-extendable-table-birch__0723099_PH129213_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-extendable-table-birch__0723101_PE371728_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table-white__0311547_PE370495_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table-white__0441748_PE593533_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table-white__0445726_PE596028_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table-white__0744771_PE743390_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table-white__0744772_PE743391_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table-white__0745735_PH149800_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table-white__0745737_PH144379_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table__0441747_PE593532_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table__0445724_PE596025_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table__0672529_PE716747_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table__0745748_PH153248_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/norden-gateleg-table__0745749_PH153249_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/nordviken-drop-leaf-table__0747563_PE744585_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/nordviken-drop-leaf-table__0797430_PE766874_S5.webp",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/nordviken-extendable-table-black__0744797_PE743408_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/nordviken-extendable-table-black__0744798_PE743409_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/nordviken-extendable-table-black__0797433_PH163608_S5.jpeg",
    "https://ikeaimages.s3-us-west-1.amazonaws.com/ikeaImageFEC/RandomImg/nordviken-extendable-table-black__0797434_PH163607_S5.jpeg"]

const createProduct = () => {
    let product = {};
    let ImgSrc = [];

    ImgSrc.push(coverImg[Math.floor((Math.random() * coverImg.length))])

    for (var i = 0; i < 5; i++) {
        ImgSrc.push(otherImg[Math.floor((Math.random() * otherImg.length))])
    }

    product.name = name[Math.floor((Math.random() * name.length))]
    product.shortDesc = shortDesc[Math.floor((Math.random() * shortDesc.length))]
    product.price = Math.floor((Math.random() * 900) + 100);
    product.rating = Math.floor((Math.random() * 4) + 1) + Math.random();
    product.reviewNum = Math.floor((Math.random() * 500));
    product.midDesc = midDesc[Math.floor((Math.random() * midDesc.length))]
    product.imageSrc = ImgSrc

    return product
}

const createData = () => {
    const data = [];
    for (var i = 0; i < 100; i++) {
        data.push(createProduct())
    }

    return data
}

const insertData = () => {
    var products = createData();

    products.map((product) => (
        db.save(product, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Data stored Successfully!!!!")
            }
        })
    ))
}

insertData()