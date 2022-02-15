var rawMessage = connectorMessage.getRawData();
var arrMessage = rawMessage.split("\\|");

var APS = arrMessage[0];
var RX1 = arrMessage[1];
var SG1 = arrMessage[2];
var PAT = arrMessage[3];
var DOC = arrMessage[4];
var END = arrMessage[5];
var REQR = arrMessage[6];


// Message Type //
var type = "";

// Address //

var Address = {};
Address.Street1 = PAT.substr(3,30).trim(); 
Address.Street2 = "NA";
Address.City = PAT.substr(33,20).trim();
Address.State = PAT.substr(53,2).trim();
Address.Zip = PAT.substr(55,9).trim();
Address.Country = "US";
Address.AddressType = "Home";
Address.Primary = true;

var Addresses = [];
Addresses.push(Address);

channelMap.put('Address', Address);
channelMap.put('Addresses', Addresses);



// PhoneNumber //

var PhoneNumberH = {};
PhoneNumberH.Number = PAT.substr(64,10).trim();
PhoneNumberH.Type = "Home";


var PhoneNumbers = [];
if(!IsNullOrEmpty(PhoneNumberH.Number)){
	PhoneNumbers.push(PhoneNumberH);
}


// Patient //

var Patient = {};
FullName = RX1.substr(39,30).trim();
PatinetFullName = FullName.split(" ");
Patient.Id = END.substr(17,12).trim();
Patient.LastName = PatinetFullName[2];
Patient.FirstName = PatinetFullName[0]; 
Patient.DOB = FormateDate(RX1.substr(290,8).trim());
Patient.IdType = null;
Patient.Initials = null;
Patient.MiddleName = PatinetFullName[1];
Patient.Addresses = Addresses;
Patient.PhoneNumbers = PhoneNumbers;
Patient.Sex = "Undeclared"
channelMap.put('Patient', Patient);

// LabelItems //

var LabelItems = [];

var SourceTerminal = {}
SourceTerminal.Name = "SourceTerminal";
SourceTerminal.Text = APS.substr(3,3).trim();
LabelItems.push(SourceTerminal);

var EntryInitials = {}
EntryInitials.Name = "EntryInitials";
EntryInitials.Text = APS.substr(6,5).trim();
LabelItems.push(EntryInitials);

var OriginalEntryInitials = {}
OriginalEntryInitials.Name = "OriginalEntryInitials";
OriginalEntryInitials.Text = APS.substr(11,5).trim();
LabelItems.push(OriginalEntryInitials);


var EntryDate = {}
EntryDate.Name = "EntryDate";
EntryDate.Text = FormatDate3(APS.substr(16,14).trim());
LabelItems.push(EntryDate);

var Urgency = {}
Urgency.Name = "Urgency";
Urgency.Text = APS.substr(36,1).trim();
LabelItems.push(Urgency);

var FamilyID = {}
FamilyID.Name = "FamilyID";
FamilyID.Text = RX1.substr(23,16).trim();
LabelItems.push(FamilyID);

var PatientFullName = {}
PatientFullName.Name = "PatientFullName";
PatientFullName.Text = RX1.substr(39,30).trim();
LabelItems.push(PatientFullName);

var RxNumber = {}
RxNumber.Name = "RxNumber";
RxNumber.Text = RX1.substr(83,11).trim();
LabelItems.push(RxNumber);



var RefillNumber = {}
RefillNumber.Name = "RefillNumber";
RefillNumber.Text = RX1.substr(105,2).trim();
LabelItems.push(RefillNumber);

var DispenseQuantity = {}
DispenseQuantity.Name = "DispenseQuantity";
DispenseQuantity.Text = RX1.substr(107,4).trim();
LabelItems.push(DispenseQuantity);

var DaysSupply = {}
DaysSupply.Name = "DaysSupply";
DaysSupply.Text = RX1.substr(111,2).trim();
LabelItems.push(DaysSupply);

var DrugNDC = {}
DrugNDC.Name = "DrugNDC";
DrugNDC.Text = RX1.substr(114,12).trim();
LabelItems.push(DrugNDC);

var DAW = {}
DAW.Name = "DAW";
DAW.Text = RX1.substr(126,1).trim();
LabelItems.push(DAW);

var TotalRefills = {}
TotalRefills.Name = "TotalRefills";
TotalRefills.Text = RX1.substr(127,2).trim();
LabelItems.push(TotalRefills);

var RxOrigin = {}
RxOrigin.Name = "RxOrigin";
RxOrigin.Text = RX1.substr(129,1);
LabelItems.push(RxOrigin);

var DispensedDrugName = {}
DispensedDrugName.Name = "DispensedDrugName";
DispensedDrugName.Text = RX1.substr(130,40).trim();
LabelItems.push(DispensedDrugName);

var DrugSchedule = {}
DrugSchedule.Name = "DrugSchedule";
DrugSchedule.Text = RX1.substr(170,1).trim(); 
LabelItems.push(DrugSchedule);

var PreviousRxNumber = {}
PreviousRxNumber.Name = "PreviousRxNumber";
PreviousRxNumber.Text = RX1.substr(171,11).trim();
LabelItems.push(PreviousRxNumber);


var PrescriberFullName = {}
PrescriberFullName.Name = "PrescriberFullName";
PrescriberFullName.Text = RX1.substr(182,30).trim();
LabelItems.push(PrescriberFullName);

var PatientSSN = {}
PatientSSN.Name = "PatientSSN";
PatientSSN.Text = RX1.substr(212,13).trim();
LabelItems.push(PatientSSN);

var PartialFill = {}
PartialFill.Name = "PartialFill";
PartialFill.Text = RX1.substr(225,1);
LabelItems.push(PartialFill);

var RxOrigDate = {}
RxOrigDate.Name = "RxOrigDate";
RxOrigDate.Text = FormateDate(RX1.substr(226,8).trim());
LabelItems.push(RxOrigDate);

var PrescribedDrugName = {}
PrescribedDrugName.Name = "PrescribedDrugName";
PrescribedDrugName.Text = RX1.substr(234,40).trim();
LabelItems.push(PrescribedDrugName);

var DrugIEN = {}
DrugIEN.Name = "DrugIEN";
DrugIEN.Text = RX1.substr(274,16).trim();
LabelItems.push(DrugIEN);

var PatientDOB = {}
PatientDOB.Name = "PatientDOB";
PatientDOB.Text = Patient.DOB;//FormateDate3(RX1.substr(290,8).trim());
LabelItems.push(PatientDOB);

var Warning1 = {}
Warning1.Name = "Warning1";
Warning1.Text = SG1.substr(16,5).trim();
LabelItems.push(Warning1);


var Warning2 = {}
Warning2.Name = "Warning2";
Warning2.Text = SG1.substr(21,5).trim();
LabelItems.push(Warning2);


var Warning3 = {}
Warning3.Name = "Warning3";
Warning3.Text = SG1.substr(26,5).trim();
LabelItems.push(Warning3);

var Warning4 = {}
Warning4.Name = "Warning4";
Warning4.Text = SG1.substr(31,5).trim();
LabelItems.push(Warning4);

var Sig = {}
Sig.Name = "Sig";
Sig.Text = SG1.substr(39,999).trim();
LabelItems.push(Sig);

var PatientAddress = {}
PatientAddress.Name = "PatientAddress";
PatientAddress.Text = PAT.substr(3,30).trim();
LabelItems.push(PatientAddress);

var PatientCity = {}
PatientCity.Name = "PatientCity";
PatientCity.Text = PAT.substr(33,20).trim();
LabelItems.push(PatientCity);

var PatientState = {}
PatientState.Name = "PatientState";
PatientState.Text = PAT.substr(53,2).trim();
LabelItems.push(PatientState);

var PatientZip = {}
PatientZip.Name = "PatientZip";
PatientZip.Text = PAT.substr(55,9).trim();
LabelItems.push(PatientZip);

var PatientPhoneNumber = {}
PatientPhoneNumber.Name = "PatientPhoneNumber";
PatientPhoneNumber.Text = PAT.substr(64,10).trim();
LabelItems.push(PatientPhoneNumber);

var PrescriberAddress1 = {}
PrescriberAddress1.Name = "PrescriberAddress1";
PrescriberAddress1.Text = DOC.substr(3,30).trim();
LabelItems.push(PrescriberAddress1);

var PrescriberCity = {}
PrescriberCity.Name = "PrescriberCity";
PrescriberCity.Text = DOC.substr(33,20).trim();
LabelItems.push(PrescriberCity);


var PrescriberState = {}
PrescriberState.Name = "PrescriberState";
PrescriberState.Text = DOC.substr(53,2).trim();
LabelItems.push(PrescriberState);

var PrescriberZip = {}
PrescriberZip.Name = "PrescriberZip";
PrescriberZip.Text = DOC.substr(55,9).trim();
LabelItems.push(PrescriberZip);

var PrescriberPhoneNumber = {}
PrescriberPhoneNumber.Name = "PrescriberPhoneNumber";
PrescriberPhoneNumber.Text = DOC.substr(64,10).trim();
LabelItems.push(PrescriberPhoneNumber);

var PrescriberDEA = {}
PrescriberDEA.Name = "PrescriberDEA";
PrescriberDEA.Text = DOC.substr(74,10).trim();
LabelItems.push(PrescriberDEA);

channelMap.put('LabelItems', LabelItems);

// Med //

var Med = {};
Med.Description = "";
if(IsNullOrEmpty(Med.Description)){
	Med.Description = "";
}
Med.Id = RX1.substr(114,12).trim();
Med.MedIdType = 0;
Med.Name = RX1.substr(234,40).trim();
Med.InventorySelector = "";
channelMap.put('Med', Med);


// Doses //
var Doses = [];
var Dose = {};

Dose.AdminDateTime = FormateDate();
var doseQuantity = "";
Dose.Quantity = IsNullOrEmpty(doseQuantity) ? '1' : doseQuantity;
Dose.Sig = SG1.substr(39,999).trim();
Dose.TimeName = ""; 

Doses.push(Dose);

// HOA //

var HOA = {};

HOA.StartDate = FormateDate();
HOA.EndDate = FormateDate();
HOA.Doses = Doses;
HOA.ScheduleType = 0;

channelMap.put('HOA', HOA);

// Scripts //

var Script = {};

//logger.info();
Script.Action = ProcessScriptAction(APS.substr(35,1));
Script.Packaging = DoesHOAExists(HOA) === true ? 1:5; //Adherence 1; Blister 2; Manual 3; Pouch 4; Vial 5;
Script.RxNumber = RX1.substr(83,11).trim();
Script.RefillNumber = parseFloat(RX1.substr(105,2));
Script.TransactionId = Script.RxNumber + Script.RefillNumber + "00";
Script.Barcode = Script.TransactionId
Script.DispenseQuantity = parseFloat(RX1.substr(107,4).trim());

var BatchId = UUIDGenerator.getUUID();
Script.BatchId = BatchId;

Script.SequenceNumber = 1;
Script.PatientId = Patient.Id
Script.FacilityId = "StoreX";
Script.Med = Med;
Script.DAW = RX1.substr(126,1) === "N" ? false : true; //boolean
Script.DaysSupply = IsNullOrEmpty(parseInt(RX1.substr(111,2))) ? 0 : parseInt(RX1.substr(111,2));
Script.HOA = null;
Script.LabelItems = LabelItems;
Script.RefillsRemaining = 0.0;// numeric
Script.RefillsTotal = parseFloat(RX1.substr(127,2))//parseFloat(Script.RefillNumber + Script.RefillsRemaining); // numeric
Script.PartialNumber = parseInt(RX1.substr(225,1));//0;
Script.RxExpirationDate = "";//FormateDate();
Script.SafetyCap = "NA";
Script.Sig = SG1.substr(39,999);
Script.Urgency = APS.substr(36,1); //numeric Urgency - (0) Delay, (1) Normal, (2) Rush, (3) Urgent, (4) Hold 

//

channelMap.put('Script', Script);

// Facility //

var Facility = {};
Facility.Id = Script.FacilityId;
Facility.Bed = null;
Facility.Cabinet = null;
Facility.Floor = null;
Facility.Name = "StoreX";
Facility.NursingStationId = null;
Facility.Room = null;
Facility.Unit = null;
Facility.Addresses = [];

var FacilityAddress = {};
FacilityAddress.Street1 = "NA";
FacilityAddress.Street2 = "NA";
FacilityAddress.City = "NA";
FacilityAddress.State = "NA";
FacilityAddress.Zip = "NA";
FacilityAddress.Country = "US";
FacilityAddress.AddressType = "Home";
FacilityAddress.Primary = true;

Facility.Addresses.push(FacilityAddress);


// Batch //

var Batch = {};

var Scripts = [];
Scripts.push(Script);
var Facilities = [];
Facilities.push(Facility);
var Patients = [];
Patients.push(Patient);



Batch.Id = BatchId;
Batch.TransmissionId = "";
Batch.ScriptCount = Scripts.length;
Batch.SourceTerminal = "";
Batch.Scripts = Scripts;
Batch.Facilities = Facilities;
Batch.Patients = Patients;

channelMap.put('Batch', Batch);
//logger.info(JSON.stringify(Batch,null,2));