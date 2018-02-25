export default function whatToWear(temp){
	if (temp>=10&&temp<=15) {
		return 'hoody';
	} else if (temp<10) {
		return 'jacket';
	} else {
		return 't-shirt';
	}
}
