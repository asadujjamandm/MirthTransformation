package mirthSocket;

class Main {     
    public static void main(String args[]) throws Exception{
        //TcpDestination tcpDestination  = new TcpDestination("10.12.72.6", 8071);     //"10.12.72.6", 8071 "10.6.72.59", 2000
        
        String jsonData = "{\"Id\":\"936b84cf-87e9-4d02-bb15-16fa9cf2bf75\",\"TransmissionId\":\"\",\"ScriptCount\":1,\"SourceTerminal\":\"UNKNOWN\",\"Scripts\":[{\"Action\":\"Fill\",\"Packaging\":1,\"RxNumber\":\"00555013996\",\"RefillNumber\":\"0\",\"TransactionId\":\"00555013996000\",\"Barcode\":\"00555013996000\",\"DispenseQuantity\":\"10\",\"BatchId\":\"936b84cf-87e9-4d02-bb15-16fa9cf2bf75\",\"SequenceNumber\":\"1\",\"PatientId\":\"B9564\",\"FacilityId\":null,\"Med\":{\"Description\":null,\"Id\":\"00555013996\",\"MedIdType\":0,\"Name\":null,\"InventorySelector\":\"\"},\"DAW\":false,\"DaysSupply\":\"30\",\"HOA\":{\"StartDate\":\"2011/05/06 12:00:00 AM\",\"EndDate\":\"2012/05/05 12:00:00 AM\",\"Doses\":[{\"AdminDateTime\":\"2021/11/09 12:13:04 PM\",\"Quantity\":1,\"Sig\":null,\"TimeName\":null}],\"ScheduleType\":0},\"LabelItems\":[{\"Name\":\"StoreName\",\"Text\":\"EMC AMBULATORY PHARMACY\"},{\"Name\":\"StoreAddress\",\"Text\":\"1979 Milky Way\"},{\"Name\":\"StoreCity\",\"Text\":\"Verona\"},{\"Name\":\"StoreZip\",\"Text\":\"53593\"},{\"Name\":\"DEA\",\"Text\":\"AB23377189-893776\"},{\"Name\":\"PharmacistInitials\",\"Text\":\"MD\"},{\"Name\":\"PrescriberTitle\",\"Text\":\"PHYSICIAN\"},{\"Name\":\"PrescriberLastName\",\"Text\":\"PHARMACIST\"},{\"Name\":\"PrescriberFirstName\",\"Text\":\"AMBRX\"}],\"RefillsRemaining\":\"3\",\"RefillsTotal\":3,\"PartialNumber\":\"0\",\"RxExpirationDate\":\"2012/05/05 12:00:00 AM\",\"Sig\":\"Take 1 tablet by mouth 3 times daily for 120 days.\",\"Urgency\":\"3839\"}],\"Facilities\":null,\"Patients\":[{\"Id\":\"B9564\",\"FirstName\":\"GOODWIN\",\"LastName\":\"THEODORE\",\"DOB\":\"1949/04/10 12:00:00 AM\",\"IdType\":null,\"Initials\":null,\"MiddleName\":\"A\",\"Sex\":\"Male\",\"Addresses\":[],\"PhoneNumbers\":[{\"Number\":\"(608)213-5806\",\"Type\":\"PH\"}]}]}";

        //tcpDestination.SendToServer(jsonData);

        jsonData = jsonData.replaceAll("\\{", "{\r\n")
							.replaceAll("\\,", ",\r\n")
						    .replaceAll("\\[" , "[\r\n")
							.replaceAll("\\}", "\r\n}")
							.replaceAll("\\]", "\r\n]");
							// .replace("\"", '/\"');
    
        System.out.println(jsonData);

        System.out.println("Done! \r\n I am Done");
        
    }

    
}
