
### Prerequisite
Please change the ormconfig.json
```
  "username": "",
  "password": "",
  "database": "",
```

### To Run
```
  yarn install
  yarn migration:run 
  yarn start
```

Open the localhost:3000/graphql

## Query

### List of revenue per partner
Perform query and verify that the revenue per partner is return
```
{
  getPartnerRevenue {
    partnerName
    revenue
  }
}
```
