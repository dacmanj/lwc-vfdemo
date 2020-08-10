public without sharing class lwcVFDemoController {
    @AuraEnabled(cacheable = true)
    public static List<SObject> fetchsObjectData(String obName, String whereClause){
        String qry = 'SELECT ID, Name FROM '+obName+ ' '+ whereClause + ' LIMIT 5';
        System.debug(qry);
        return database.query(qry);
    }
}
