class Student{
	//nome, idade, gênero, ano,
	name;
	age;
	gender;
	grade;

	//
	schoolSubjects(){};
	grade(){};
}
function sumGrade(grade){
	let result = 0
	for (let i = 0; i < grade.lenght; i++){
		result += [i]
	}
	return result / grade.lenght
}
