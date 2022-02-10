// Address //

var Address = {};

Address.Street1 = msg['EventData']['PatientAddress'].toString().trim();
Address.Street2 = null;

var PatientCityStateZip = msg['EventData']['PatientCityStateZip'].toString().split(' ');

for(var i = 0; i<PatientCityStateZip.length; i++ ){
		
	if(!IsNullOrEmpty(PatientCityStateZip[i]) && i === 0){
		Address.City = PatientCityStateZip[i];
	}

	if(!IsNullOrEmpty(PatientCityStateZip[i]) && i === 1){
		Address.State = PatientCityStateZip[i];		
	}	

	if(!IsNullOrEmpty(PatientCityStateZip[i]) && i === 2){
		Address.ZIP = PatientCityStateZip[i];		
	}	
	 
}

Address.Country = "";
Address.AddressType = "Primary";
Address.Primary = "true";

var Addresses = [];

if((!IsNullOrEmpty(Address.Street1) || !IsNullOrEmpty(Address.Street2)) && 
	(!IsNullOrEmpty(Address.City) || !IsNullOrEmpty(Address.State)))
{
	Addresses.push(Address);
}

channelMap.put('Addresses', Addresses);


// PhoneNumber //

var PhoneNumberH = {};

PhoneNumberH.Number = msg['EventData']['PatientPhone'].toString();
PhoneNumberH.Type = "PH";

var PhoneNumbers = [];

if(!IsNullOrEmpty(PhoneNumberH.Number)){
	PhoneNumbers.push(PhoneNumberH);
}

channelMap.put('PhoneNumbers', PhoneNumbers);

// Patient //

var Patient = {};

Patient.Id = msg['EventData']['PatientKey'].toString(); // FOL
Patient.FirstName = msg['EventData']['PatientFirstName'].toString();
Patient.LastName = msg['EventData']['PatientLastName'].toString()
Patient.DOB = FormateDate(msg['EventData']['PatientDOB'].toString()); // FOL
Patient.IdType = null;
Patient.Initials = null; //// FOL
Patient.MiddleName = msg['EventData']['PatientMidInit'].toString(); //// FOL
Patient.Sex = null;

Patient.Addresses = Addresses;
Patient.PhoneNumbers = PhoneNumbers;
channelMap.put('Patient', Patient);

// LabelItems //

var LabelItems = [];

var StoreName = {};
StoreName.Name = "StoreName";
StoreName.Text = msg['RXE']['RXE.40']['RXE.40.2'].toString().trim();

if(!IsNullOrEmpty(StoreName.Text)){
	LabelItems.push(StoreName);
}

var PrescriberName = {};

PrescriberName.Name = "PrescriberName";
PrescriberName.Text = msg['EventData']['PrescriberName'].toString();

if(!IsNullOrEmpty(PrescriberName.Text)){
	LabelItems.push(PrescriberName);
}

var DrugExpirationDateText = {};

DrugExpirationDateText.Name = "DrugExpirationDateText";
DrugExpirationDateText.Text = msg['EventData']['DrugExp'].toString();

if(!IsNullOrEmpty(DrugExpirationDateText.Text)){
	LabelItems.push(DrugExpirationDateText);
}

var DispensedDrugName = {}

DispensedDrugName.Name = "DispensedDrugName";
DispensedDrugName.Text = msg['EventData']['DrugName'].toString();

if(!IsNullOrEmpty(DispensedDrugName.Text)){
	LabelItems.push(DispensedDrugName);
}

var DispenseQuantity = {}

DispenseQuantity.Name = "DispenseQuantity";
DispenseQuantity.Text = msg['EventData']['Quantity'].toString();

if(!IsNullOrEmpty(DispenseQuantity.Text)){
	LabelItems.push(DispenseQuantity);
}

var DrugNDC = {}

DrugNDC.Name = "DrugNDC";
DrugNDC.Text = msg['EventData']['Quantity'].toString();

if(!IsNullOrEmpty(DispenseQuantity.Text)){
	LabelItems.push(DispenseQuantity);
}

channelMap.put('LabelItems', LabelItems);

// Med //

var Med = {};
Med.Description = msg['EventData']['DrugImprint'].toString();
Med.Id = msg['EventData']['DrugNDC'].toString()
Med.MedIdType = 0;
Med.Name = msg['EventData']['DrugName'].toString();
Med.InventorySelector = "";

channelMap.put('Med', Med);

// Doses //
var Doses = null;

// HOA //

var HOA = null;

// Scripts //

var Script = {};
Script.Action = msg['Event'].toString();
Script.Packaging = 1; //Adherence 1; Blister 2; Manual 3; Pouch 4; Vial 5;
Script.RxNumber = msg['EventData']['RxNumber'].toString();
Script.RefillNumber = msg['EventData']['RefillNumber'].toString();
Script.TransactionId = Script.RxNumber + Script.RefillNumber + "00";
Script.Barcode = msg['EventData']['PMSBarcode'].toString();//Script.TransactionId
Script.DispenseQuantity = msg['EventData']['Quantity'].toString();

var BatchId = UUIDGenerator.getUUID();
Script.BatchId = BatchId;

Script.SequenceNumber = "1";
Script.PatientId = Patient.Id;
Script.FacilityId = null;
Script.Med = Med;
Script.DAW = false; // FOL
Script.DaysSupply = 30; //FOL
Script.HOA = null; //HOA; //FOL
Script.LabelItems = LabelItems; //LabelItems; //FOL
var numeric = /^[0-9]+$/;
Script.RefillsRemaining = msg['EventData']['RefillsRemaining'].toString().match(numeric) ? msg['EventData']['RefillsRemaining'].toString() : 0;
Script.RefillsTotal = Script.RefillNumber + Script.RefillsRemaining; //FOL
Script.PartialNumber = "0";
Script.RxExpirationDate = msg['EventData']['ExpDateScript'].toString();
Script.Sig = msg['EventData']['SIG'].toString();
Script.Urgency = "0"; //FOL

channelMap.put('Script', Script);


// Batch //
var Batch = {};

var Scripts = [];
Scripts.push(Script);
var Facilities = [];
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