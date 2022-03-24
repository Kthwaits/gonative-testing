export function scanBarcode() {

    function process_barcode(data) { 
        if (data.success) {
            return data.code; 
        }
    }

    gonative.barcode.scan({'callback':process_barcode});

}