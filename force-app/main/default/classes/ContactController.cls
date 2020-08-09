public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        List<Contact> contacts = [
            SELECT FirstName, LastName, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            ORDER BY LastName, FirstName
        ];

        if (contacts.size() > 0) {
            throw new AuraHandledException('Forced error');
        }
        return contacts;


    }
}