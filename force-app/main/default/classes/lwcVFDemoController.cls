public without sharing class lwcVFDemoController {
    @AuraEnabled(cacheable = true)
    public static List<SObject> fetchsObjectData(String obName){
        return database.query('SELECT ID, Name FROM '+obName+' LIMIT 5');
    }
}
