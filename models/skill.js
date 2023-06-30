const skills = [
  { id: 123456, skill: 'Quantum Banana Peeling', description: 'Can peel a banana in multiple parallel universes simultaneously.' },
  { id: 234567, skill: 'Professional Pillow Fluffer', description: 'Can fluff pillows to the perfect level of softness.' },
  { id: 345678, skill: 'Expert Bubble Wrap Popping', description: 'Possesses lightning-fast reflexes and can pop bubble wrap with unmatched precision.' },
  { id: 456789, skill: 'Professional Wild Animal Whisperer', description: 'Capable of communicating telepathically with bears and other fluffy dangerous wild animals and get pets.' },
  { id: 567890, skill: 'Master of Coffee Telekinesis', description: 'Can stir coffee from a distance using the power of the mind, ensuring a perfectly blended cup every time.' },
  { id: 678901, skill: 'Extreme Sock Matching', description: 'Has an uncanny ability to find and pair matching socks, even in the most chaotic laundry piles.' },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function deleteOne(id){
  id = parseInt(id);
  //in here we will create a constant called idx. we will loop through the skills set via findIndex, to return the item with the chosen id, and splice the skills array.

  // do I want to return the index or the actual object?
  
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}
function create(newSkillet){
    newSkillet.id = Date.now() % 1000000;
    skills.push(newSkillet);
  }

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}