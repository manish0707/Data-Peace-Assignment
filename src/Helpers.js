export const mySort = (data, sortby) => {
    if(sortby === 'ID') {
        return data.sort((a,b) => {
            if(a.id > b.id) return 1;
            if(a.id < b.id) return -1;
            return 0;
        })
    }
    if(sortby === 'FIRSTNAME') {
        return data.sort((a,b) => {
            if(a.first_name > b.first_name) return 1;
            if(a.first_name < b.first_name) return -1;
            return 0;
        })
    }
    if(sortby === 'LASTNAME') {
        return data.sort((a,b) => {
            if(a.last_name > b.last_name) return 1;
            if(a.last_name < b.last_name) return -1;
            return 0;
        })
    }
    if(sortby === 'COMPANY') {
        return data.sort((a,b) => {
            if(a.company_name > b.company_name) return 1;
            if(a.company_name < b.company_name) return -1;
            return 0;
        })
    }
    if(sortby === 'CITY') {
        return data.sort((a,b) => {
            if(a.city > b.city) return 1;
            if(a.city < b.city) return -1;
            return 0;
        })
    }
    if(sortby === 'EMAIL') {
        return data.sort((a,b) => {
            if(a.email > b.email) return 1;
            if(a.email < b.email) return -1;
            return 0;
        })
    } 
    if(sortby === 'ZIP') {
        return data.sort((a,b) => {
            if(a.zip > b.zip) return 1;
            if(a.zip < b.zip) return -1;
            return 0;
        })
    }
    if(sortby === 'STATE') {
        return data.sort((a,b) => {
            if(a.state > b.state) return 1;
            if(a.state < b.state) return -1;
            return 0;
        })
    }
    if(sortby === 'AGE') {
        return data.sort((a,b) => {
            if(a.age > b.age) return 1;
            if(a.age < b.age) return -1;
            return 0;
        })
    }
    else {
        return null;
    }
}