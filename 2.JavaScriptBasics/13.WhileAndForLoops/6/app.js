let value = '';
for(;;){
	value = prompt('Введите число, которое будет больше 100', '');
	if(value === null || value === '' || value > 100) break;
}