const _data = {
    laws: [
        {
            id: 0,
            name: '123123',
            description: 'dddd',
        }
    ],
    budget: 1000000,
    citizensSatisfactions: 0,
}

const Government = {
    addLaw: (id, name, description) => {
        _data.laws.push({
            id: id,
            name: name,
            description: description,
        });
        _data.citizensSatisfactions -= 10;
    },
    readConstitution: () => [..._data.laws],
    readLaw: id => _data.laws.find(item => item.id===id),
    showSatiasfaction: () => _data.citizensSatisfactions,
    showBudget: () => _data.budget,
    holiday: () => {
        _data.budget -= 50000;
        _data.citizensSatisfactions += 5;
    }
}

Object.freeze(Government);

export default Government;
