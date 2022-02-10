// Address //

var Address = {};

Address.Street1 = msg['PID']['PID.11']['PID.11.1'].toString().trim();
Address.Street2 = null;
Address.City = msg['PID']['PID.11']['PID.11.3'].toString().trim();
Address.State = msg['PID']['PID.11']['PID.11.4'].toString().trim();
Address.ZIP = msg['PID']['PID.11']['PID.11.5'].toString().trim();
Address.Country = ""; // not found
Address.AddressType = "Primary"; //not found
Address.Primary = "true"; //not found

var Addresses = [];

if((!IsNullOrEmpty(Address.Street1) || !IsNullOrEmpty(Address.Street2)) && 
	(!IsNullOrEmpty(Address.City) || !IsNullOrEmpty(Address.State)))
{
	Addresses.push(Address);
}

channelMap.put('Address', Address);
channelMap.put('Addresses', Addresses);

//logger.info('Address: ' + JSON.stringify(Address));

// PhoneNumber //

var PhoneNumberH = {};
PhoneNumberH.Number = msg['PID']['PID.13']['PID.13.1'].toString().trim(); 
PhoneNumberH.Type = 'PH';

var PhoneNumbers = [];

if(!IsNullOrEmpty(PhoneNumberH.Number)){
	PhoneNumbers.push(PhoneNumberH);
}


// Patient //

var Patient = {};

Patient.Id = msg['PID']['PID.3']['PID.3.1'].toString();
Patient.FirstName = msg['PID']['PID.5']['PID.5.2'].toString().trim();
Patient.MiddleName = msg['PID']['PID.5']['PID.5.3'].toString().trim();
Patient.LastName = msg['PID']['PID.5']['PID.5.1'].toString().trim();
Patient.DOB = FormateDate(msg['PID']['PID.7']['PID.7.1'].toString().trim());
Patient.IdType = null; //not found in InterfaceQ1XML file
Patient.Initials = null; //not found in InterfaceQ1XML file
Patient.Sex = msg['PID']['PID.8']['PID.8.1'].toString().trim() === "M" ? "Male" : "Female";

Patient.Addresses = Addresses;
Patient.PhoneNumbers = PhoneNumbers;
channelMap.put('Patient', Patient);
logger.info(JSON.stringify(Patient));
// LabelItems //

var LabelItems = [];

var StoreName = {}
StoreName.Name = "StoreName";
StoreName.Text = msg['ZAP']['ZAP.70']['ZAP.70.1'].toString().trim();

if(StoreName.Text != null && StoreName.Text != ""){
	LabelItems.push(StoreName);
}


var StoreAddress = {};
StoreAddress.Name = "StoreAddress";
StoreAddress.Text = msg['ZAP']['ZAP.62']['ZAP.62.1'].toString().trim();

if(StoreAddress.Text != null && StoreAddress.Text != ""){
	LabelItems.push(StoreAddress);
}


var StoreCity = {};
StoreCity.Name = "StoreCity";
StoreCity.Text = msg['ZAP']['ZAP.63']['ZAP.63.1'].toString().trim();

if(StoreCity.Text != null && StoreCity.Text != ""){
	LabelItems.push(StoreCity);
}

var StoreZip = {};
StoreZip.Name = "StoreZip"
StoreZip.Text = msg['ZAP']['ZAP.65']['ZAP.65.1'].toString().trim();

if(StoreZip.Text != null && StoreZip.Text != ""){
	LabelItems.push(StoreZip);
}

var DEA = {};
DEA.Name = "DEA";
DEA.Text = msg['ZAP']['ZAP.44']['ZAP.44.1'].toString().trim();

if(DEA.Text != null && DEA.Text != ""){
	LabelItems.push(DEA);
}

var PharmacistInitials= {};
PharmacistInitials.Name = "PharmacistInitials";
PharmacistInitials.Text = msg['ZAP']['ZAP.69']['ZAP.69.1'].toString().trim();//Pharmacist ID: ZAP,69(not sure)

if(PharmacistInitials.Text != null && PharmacistInitials.Text != ""){
	LabelItems.push(PharmacistInitials);
}

var PrescriberLastName = {};
PrescriberLastName.Name = "PrescriberLastName";//ORC,12.2
PrescriberLastName.Text = msg['ORC']['ORC.12']['ORC.12.2'].toString().trim();

if(PrescriberLastName.Text != null && PrescriberLastName.Text != ""){
	LabelItems.push(PrescriberLastName);
}


var PrescriberFirstName = {};
PrescriberFirstName.Name = "PrescriberFirstName";
PrescriberFirstName.Text = msg['ORC']['ORC.12']['ORC.12.3'].toString().trim();

if(PrescriberFirstName.Text != null && PrescriberFirstName.Text != ""){
	LabelItems.push(PrescriberFirstName);
}

channelMap.put('LabelItems', LabelItems);


// Med //

var Med = {};
Med.Description = msg['RXE']['RXE.2']['RXE.2.2'].toString().trim(); // BABY WIPES
if(IsNullOrEmpty(Med.Description)){
	Med.Description = null;
}
Med.Id = msg['RXE']['RXE.2']['RXE.2.1'].toString().trim();
medIdType = msg['ZAP']['ZAP.100']['ZAP.100.1'].toString().trim();
Med.MedIdType = !IsNullOrEmpty(medIdType) ? medIdType : 0;
Med.Name = msg['RXE']['RXE.2']['RXE.2.2'].toString().trim();
Med.InventorySelector = "";

channelMap.put('Med', Med);

// Doses //

var Doses = [];


// HOA //

var HOA = null;


// Scripts //

var Script = {};

Script.Action = ProcessScriptAction(msg['ORC']['ORC.1']['ORC.1.1'].toString().trim().toUpperCase());
Script.Packaging = 1;//DoesHOAExists(HOA) === true ? 1:5; //Adherence 1; Blister 2; Manual 3; Pouch 4; Vial 5;

Script.RxNumber = msg['RXE']['RXE.15']['RXE.15.1'].toString();;
Script.RefillNumber = msg['RXE']['RXE.17']['RXE.17.1'].toString();
Script.TransactionId = Script.RxNumber + Script.RefillNumber + "00";
Script.Barcode = Script.TransactionId
Script.DispenseQuantity = msg['RXE']['RXE.1']['RXE.1.1'].toString();

var BatchId = UUIDGenerator.getUUID();
Script.BatchId = BatchId;

Script.SequenceNumber = "1";
Script.PatientId = Patient.Id;
Script.FacilityId =null;//
Script.Med = Med;
Script.DAW = false; //msg['RXE']['RXE.14']['RXE.14.1'].toString().toString().trim();//ok
Script.DaysSupply = parseInt(msg['RXE']['RXE.1']['RXE.1.3'].toString().replace('D', ''));
Script.HOA = HOA;
Script.LabelItems = LabelItems;
Script.RefillsRemaining = parseInt(msg['RXE']['RXE.16']['RXE.16.1'].toString().trim());
Script.RefillsTotal = parseInt(Script.RefillNumber) + parseInt(Script.RefillsRemaining); //msg['RXE']['RXE.12']['RXE.12.1'].toString().trim(); // (Previous code--> )
Script.PartialNumber = "0";
Script.RxExpirationDate = FormateDate(msg['RXE']['RXE.1']['RXE.1.5'].toString().trim());
Script.Sig = msg['RXE']['RXE.7']['RXE.7.1'].toString().trim();
Script.Urgency = msg['RXE']['RXE.1']['RXE.1.6'].toString(); 

channelMap.put('Script', Script);


// Facility //

var Facility = {};

Facility.Id= "";
Facility.Bed= msg['ZAP']['ZAP.30']['ZAP.30.3'].toString().trim(); ///ZAP,30.4
Facility.Cabinet= null; // not found
Facility.Floor= ""; // not found
Facility.Name= msg['ZAP']['ZAP.30']['ZAP.30.4'].toString().trim();
Facility.NursingStationId= null;//not found 
Facility.Room= msg['ZAP']['ZAP.30']['ZAP.30.2'].toString().trim();
Facility.Unit= msg['ZAP']['ZAP.30']['ZAP.30.1'].toString().trim();
Facility.Addresses= null;//msg['ZAP']['ZAP.30']['ZAP.30.4'].toString().trim(); // need to check again (not confirm)

var Facilities = [];

if(!IsNullOrEmpty(Facility.Bed) &&
	!IsNullOrEmpty(Facility.Name) &&
	!IsNullOrEmpty(Facility.Room) &&
	!IsNullOrEmpty(Facility.Unit))
{
		Facilities.push(Facility);
}


// Batch //

var Batch = {};

var Scripts = [];
Scripts.push(Script);
var Patients = [];
Patients.push(Patient);


Batch.Id = BatchId;
Batch.TransmissionId = "";
Batch.ScriptCount = Scripts.length;
Batch.SourceTerminal = "UNKNOWN";
Batch.Scripts = Scripts;
Batch.Facilities = Facilities;
Batch.Patients = Patients;

channelMap.put('Batch', Batch);