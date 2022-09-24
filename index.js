const url = "https://keamedias2-d747.restdb.io/rest/stardust-lab";

// API key
//632f698a32330102d591d19a

const options = {
  headers: {
    "x-apikey": "632f698a32330102d591d19a",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(goThroughEach);

// run through everything
function goThroughEach(data) {
  console.log(data);
  data.forEach(showProducts);
}

function showProducts(oneItem) {
  console.log(oneItem);
  //make a template
  //grab it
  //clone it
  //populate data
  //find parent
  //append it
}
