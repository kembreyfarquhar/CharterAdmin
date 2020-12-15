# CharterAdmin API

[DB Designer Link](https://dbdesigner.page.link/zDPUAbFXrQFbH3iB6)

![database design schema](assets/dbdesign.png?raw=true)

## Documentation

> This API was created for the sole purpose of generating a quarterly report of fake data. There are only two tables (customers and transactions) and two endpoints.

**BASE URL:** https://charter-admin.herokuapp.com

### Endpoints

| Link                                                                  | Endpoint                          |
| --------------------------------------------------------------------- | --------------------------------- |
| [GET Base](#get-base)                                                 | `/`                               |
| [GET Quarterly Transaction Report](#get-quarterly-transaction-report) | `/reports/quarterly-transactions` |

---

### [GET] Base

#### URL: https://charter-admin.herokuapp.com/

**Response:** _an HTML template with a welcome message and links to this documentation and the author's Github_

---

### [GET] Quarterly Transaction Report

#### URL: https://charter-admin.herokuapp.com/reports/quarterly-transactions

**Response:** _an array of transaction objects, joined to include user data_

```json
[
  {
    "id": 144,
    "customer_id": 17,
    "date": "2020-11-29T12:04:44.759Z",
    "total": "420.95",
    "first_name": "Keshaun",
    "last_name": "Bednar",
    "email": "Keshaun.Bednar@gmail.com"
  },
  {
    "id": 66,
    "customer_id": 7,
    "date": "2020-11-29T09:05:46.419Z",
    "total": "310.97",
    "first_name": "Evelyn",
    "last_name": "Altenwerth",
    "email": "Evelyn34@gmail.com"
  },
  {
    "id": 54,
    "customer_id": 6,
    "date": "2020-11-29T08:39:05.730Z",
    "total": "168.34",
    "first_name": "Bernardo",
    "last_name": "Kub",
    "email": "Bernardo_Kub@gmail.com"
  }
]
```
