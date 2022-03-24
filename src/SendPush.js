import axios from "axios";

export function sendPush() {
    axios({
        "method": "POST",
        "url": "https://onesignal.com/api/v1/notifications",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Basic NzI4OWU2NTAtMDFhYi00ZWI4LWI0YmMtZWI4ZTFlYWE5YzU2"
        },
        "data": {
            "headings": {
                "en": "WOO HOO! 🎉"
            },
            "included_segments": "Test Users",
            "app_id": "4a35326f-ac38-4965-bfc0-bb3bdd36d34c",
            "contents": {
                "en": "If you can see this, the test notification worked"
            },
            "buttons": [
                {
                    "id": "id1",
                    "text": "Another action"
                },
                {
                    "id": "id2",
                    "text": "Action example"
                }
            ]
        }
    })
      
}