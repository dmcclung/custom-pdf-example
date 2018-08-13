const pdfmake = require("pdfmake");
const fs = require("fs");
const moment = require("moment");

const now = moment().format("MMMM Do, YYYY");

const title = "Mr.";
const lastName = "Smith";

const docDefinition = { content: [
	{ image: "src/images/logo.jpg" },

	{ text: now },

	{ text: `To ${title} ${lastName},` },

	{ text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
Mauris rutrum felis non velit fermentum pulvinar eget vel tortor. Maecenas\
eu est vel sapien aliquet ullamcorper. Cras dapibus purus a metus porttitor,\
sed lobortis urna porta. Nunc sed est ac tortor sollicitudin aliquam.\
Pellentesque porttitor suscipit libero, id vestibulum velit laoreet sed.\
Praesent nec purus elementum nunc facilisis porta et sit amet quam. Quisque\
faucibus mi eu ornare bibendum." },

	{ text: "Sincerely," },

	{ image: "src/images/signature.jpg" },

	{ text: "Dave McDonald" },

	{ text: "President and CEO Generic Company" }
	
]};

var fonts = {
	Roboto: {
		normal: 'src/fonts/Roboto-Regular.ttf',
		bold: 'src/fonts/Roboto-Medium.ttf',
		italics: 'src/fonts/Roboto-Italic.ttf',
		bolditalics: 'src/fonts/Roboto-MediumItalic.ttf'
	}
};

const PdfPrinter = require('pdfmake/src/printer');
var printer = new PdfPrinter(fonts);
var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('example.pdf'));
pdfDoc.end();
