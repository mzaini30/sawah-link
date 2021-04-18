export function jadiLink(x){
	return x.split(' ').map(y => `<a href='${y}'>${y}</a>`).join(' ')
}