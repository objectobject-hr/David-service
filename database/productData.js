const hundredData = [{
    "name": "YPPERLIG",
    "shortDesc": "Table, ash, 78 3/4x35 3/8 \"",
    "price": 229.00,
    "rating": 4.7,
    "reviewNum": 24,
    "midDesc": "YPPERLIG table is a modern version of the traditional Scandinavian plank table. It has a stable metal underframe and 3 planks which comes in a flat-pack, making it easier to bring home.",
    "imageSrc": ["https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0737127_PE740896_S5.JPG?f=xxxl",
        "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0505507_PE633922_S5.JPG?f=xxxl",
        "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0505509_PE633923_S5.JPG?f=xxxl",
        "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0592759_PH146015_S5.JPG?f=xxxl",
        "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0592760_PH146029_S5.JPG?f=xxxl",
        "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0592862_PH146027_S5.JPG?f=xxxl",
        "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0593819_PH146986_S5.JPG?f=xxxl",
        "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0593824_PH146021_S5.JPG?f=xxxl"]
}];


const name = ['NORDVIKEN', 'NORDEN', 'NORDVIKEN', 'KEJSARKRONA', 'LANEBERG', 'INGATORP', 'MORBYLANGA', 'EKOLN', 'HEMNES', 'NORRAKER'];
const shortDesc = ['Table, ash, 78 3/4x35 3/8 "', 'Extendable table, birch, 61/82 5/8x35 3/8 "', 'Extendable table, white, 51 1/8/74 3/4x31 1/2 "', 'Table, chrome plated, high gloss white, 53 1/8x33 1/2 "', 'Dining table, oak, white, 63x31 1/2 "', 'Table, oak veneer brown stained, 55x33 "'];
const midDesc = ['The oak top layer enhances the plank feeling and details like the floating table top and dovetail joints give the table a crafted look. A table full of character and plenty of room for family and friends.',
    'This spacious, wood dining table has a traditional feel and will soon become a natural gathering place in your home. The sturdy construction and smooth extension mechanism make it a long-lasting favorite.',
    'The simple design of this dining table will blend seamlessly into your dining area. And the smooth and simple extension lets you extend your dinner invitation without worrying about fitting everyone in.',
    'A durable dining table that makes it easy to have big dinners. A single person can extend the table and there’s plenty of room for chairs since the legs are always located at the corners of the table.',
    'It’s easy to extend when guests arrive – the legs of the table stay in the corner so everyone sits comfortably. A traditional look with details like turned legs give it that little extra.',
    'Everyone faces each other around a round table and you can make room for socializing by simply adding a leaf. A traditional look with details like the turned leg gives it that little extra.'];

const createProduct = () => {
    let product = {};

    product.name = name[Math.floor((Math.random() * name.length) + 1)]
    product.shortDesc = shortDesc[Math.floor((Math.random() * shortDesc.length) + 1)]
    product.midDesc = midDesc[Math.floor((Math.random() * midDesc.length) + 1)]
    product.price = Math.floor((Math.random() * 1000) + 100);
}