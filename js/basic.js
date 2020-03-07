function Element(id){
	return document.getElementById(id);
}

//@param condition ��������
//@param data ��Ҫ���˵�����
const filter = (condition, data) => {
    return data.filter(item => {
        return Object.keys(condition).every(key => {
            return String(item[key]).toLowerCase().includes(String(condition[key]).trim().toLowerCase())
        })
    })
}