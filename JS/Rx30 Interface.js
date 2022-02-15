var rawMessage = connectorMessage.getRawData();

// Address //

var Address = {};

Address.Street1 = rawMessage.substr(935,60).trim();
Address.Street2 = null;
Address.City = null;
Address.State = null;
Address.ZIP = null;
Address.Country = null; 
Address.AddressType = "Primary";
Address.Primary = "true";


var Addresses = [];

if((!IsNullOrEmpty(Address.Street1)))
{
	Addresses.push(Address);
}

channelMap.put('Address', Address);
channelMap.put('Addresses', Addresses);



// PhoneNumber //

var PhoneNumbers = [];

var PhoneNumberH = {};

PhoneNumberH.Number = rawMessage.substr(1434,10).trim();
PhoneNumberH.Type = "PH";

PhoneNumbers.push(PhoneNumberH);


// Patient//

var Patient = {};
Patient.Id = rawMessage.substr(1397,25).trim();
Patient.FirstName =rawMessage.substr(54,22).trim();
Patient.LastName = rawMessage.substr(79,30).trim();
Patient.DOB = FormateDate(rawMessage.substr(1424,10).trim());
Patient.IdType = null;
Patient.Initials = null;
Patient.MiddleName = rawMessage.substr(76,3).trim();
Patient.Sex = "";

Patient.Address = Addresses;
Patient.PhoneNumber = PhoneNumbers;

channelMap.put('Patient', Patient);

// LabelItems //

var LabelItems = [];

var RxNumber = {};
RxNumber.Name = "RxNumber";
RxNumber.Text = rawMessage.substr(39,15).trim();

LabelItems.push(RxNumber);

var PatientFirstName = {};
PatientFirstName.Name = "PatientFirstName";
PatientFirstName.Text = rawMessage.substr(54,22).trim();

LabelItems.push(PatientFirstName);

var PatientMiddleInitial = {};
PatientMiddleInitial.Name = "PatientMiddleInitial";
PatientMiddleInitial.Text = rawMessage.substr(76,3).trim();

LabelItems.push(PatientMiddleInitial);

var PatientLastName = {};
PatientLastName.Name = "PatientLastName";
PatientLastName.Text = rawMessage.substr(79,30).trim();

LabelItems.push(PatientLastName);

var DrugNDC = {};
DrugNDC.Name = "DrugNDC";
DrugNDC.Text = rawMessage.substr(109,12).trim();

LabelItems.push(DrugNDC);

var DispensedDrugName = {};
DispensedDrugName.Name = "DispensedDrugName";
DispensedDrugName.Text = rawMessage.substr(121,50).trim();

LabelItems.push(DispensedDrugName);

var DispenseQuantity = {};
DispenseQuantity.Name = "DispenseQuantity";
DispenseQuantity.Text = rawMessage.substr(171,5).trim();

LabelItems.push(DispenseQuantity);

var DrugMfg = {};
DrugMfg.Name = "DrugMfg";
DrugMfg.Text = rawMessage.substr(176,40).trim();

LabelItems.push(DrugMfg);

var PrescriberFullName = {};
PrescriberFullName.Name = "PrescriberFullName";
PrescriberFullName.Text = rawMessage.substr(216,52).trim();

LabelItems.push(PrescriberFullName);

var PrescriberDEA = {};
PrescriberDEA.Name = "PrescriberDEA";
PrescriberDEA.Text = rawMessage.substr(268,14).trim();

LabelItems.push(PrescriberDEA);

var RPhInitials = {};
RPhInitials.Name = "RPhInitials";
RPhInitials.Text = rawMessage.substr(282,15).trim();

LabelItems.push(RPhInitials);

var TechInitials = {};
TechInitials.Name = "TechInitials";
TechInitials.Text = rawMessage.substr(297,15).trim();

LabelItems.push(TechInitials);

var Sig = {};
Sig.Name = "Sig";
Sig.Text = rawMessage.substr(312,160).trim();

LabelItems.push(Sig);

var RefillNumber = {};
RefillNumber.Name = "RefillNumber";
RefillNumber.Text = rawMessage.substr(472,3).trim();

LabelItems.push(RefillNumber);

var TotalRefills = {};
TotalRefills.Name = "TotalRefills";
TotalRefills.Text = rawMessage.substr(475,3).trim();

LabelItems.push(TotalRefills);

var RefillDate = {};
RefillDate.Name = "RefillDate";
RefillDate.Text = rawMessage.substr(478,8).trim();

LabelItems.push(RefillDate);

var FillDate= {};
FillDate.Name = "FillDate";
FillDate.Text = rawMessage.substr(486,8).trim();

LabelItems.push(RefillDate);

var RxExpirationDate = {};
RxExpirationDate.Name = "RxExpirationDate";
RxExpirationDate.Text = rawMessage.substr(494,8).trim();

LabelItems.push(RxExpirationDate);

var DrugExpirationDate = {};
DrugExpirationDate.Name = "DrugExpirationDate";
DrugExpirationDate.Text = rawMessage.substr(502,8).trim();

LabelItems.push(DrugExpirationDate);

var DaysSupply = {};
DaysSupply.Name = "DaysSupply";
DaysSupply.Text = rawMessage.substr(510,3).trim();

LabelItems.push(DaysSupply);

var DrugSchedule = {};
DrugSchedule.Name = "DrugSchedule";
DrugSchedule.Text = rawMessage.substr(513,4).trim()

LabelItems.push(DrugSchedule);

var PatientSSN = {};
PatientSSN.Name = "PatientSSN";
PatientSSN.Text = rawMessage.substr(517,11).trim();

LabelItems.push(PatientSSN);

var Warning1= {};
Warning1.Name = "Warning1";
Warning1.Text = rawMessage.substr(528,75).trim();

LabelItems.push(Warning1);

var Warning2 = {};
Warning2.Name = "Warning2";
Warning2.Text = rawMessage.substr(603,75).trim();

LabelItems.push(Warning2);

var Warning3 = {};
Warning3.Name = "Warning3";
Warning3.Text = rawMessage.substr(678,75).trim();

LabelItems.push(Warning3);

var Warning4 = {};
Warning4.Name = "Warning4";
Warning4.Text = rawMessage.substr(653,75).trim();

LabelItems.push(Warning4);

var RequestedDeviceName = {};
RequestedDeviceName.Name = "RequestedDeviceName";
RequestedDeviceName.Text = rawMessage.substr(828,10).trim();

LabelItems.push(RequestedDeviceName);

var SourceTerminal = {};
SourceTerminal.Name = "SourceTerminal";
SourceTerminal.Text = rawMessage.substr(838,5).trim();

LabelItems.push(SourceTerminal);

var Urgency = {};
Urgency.Name = "Urgency";
Urgency.Text = rawMessage.substr(843,5).trim();

LabelItems.push(Urgency);

var VialSize = {};
VialSize.Name = "VialSize";
VialSize.Text = rawMessage.substr(848,2).trim();

LabelItems.push(VialSize);

var VialNumber = {};
VialNumber.Name = "VialNumber";
VialNumber.Text = rawMessage.substr(850,2).trim();

LabelItems.push(VialNumber);

var StoreNumber = {};
StoreNumber.Name = "StoreNumber";
StoreNumber.Text = rawMessage.substr(853,12).trim();

LabelItems.push(StoreNumber);

var StoreAddress = {};
StoreAddress.Name = "StoreAddress";
StoreAddress.Text = rawMessage.substr(865,60).trim(); //865,60 5001 Library Road Bethel Park, PA 15102

LabelItems.push(StoreAddress);

var StorePhoneNumber = {};
StorePhoneNumber.Name = "StorePhoneNumber";
StorePhoneNumber.Text = rawMessage.substr(925,10).trim();

LabelItems.push(StorePhoneNumber);

var PatientAddress = {};
PatientAddress.Name = "PatientAddress";
PatientAddress.Text = rawMessage.substr(935,60).trim();

LabelItems.push(PatientAddress);

var LabelText1 = {};
LabelText1.Name = "LabelText1";
LabelText1.Text = rawMessage.substr(995,25).trim();

LabelItems.push(LabelText1);

var LabelText2 = {};
LabelText2.Name = "LabelText2";
LabelText2.Text = rawMessage.substr(1020,25).trim();

LabelItems.push(LabelText2);

var LabelText3 = {};
LabelText3.Name = "LabelText3";
LabelText3.Text = rawMessage.substr(1045,25).trim();

LabelItems.push(LabelText3);

var PrescribedDrugChemicalName = {};
PrescribedDrugChemicalName.Name = "PrescribedDrugChemicalName";
PrescribedDrugChemicalName.Text = rawMessage.substr(1070,50).trim();

LabelItems.push(PrescribedDrugChemicalName);

var RxOrigDate = {};
RxOrigDate.Name = "RxOrigDate";
RxOrigDate.Text = rawMessage.substr(1120,8).trim();

LabelItems.push(RxOrigDate);

var FreeformRefill = {};
FreeformRefill.Name = "FreeformRefill";
FreeformRefill.Text = rawMessage.substr(1128,30).trim();

LabelItems.push(FreeformRefill);

var RefillsLeft = {};
RefillsLeft.Name = "RefillsLeft";
RefillsLeft.Text = rawMessage.substr(1158,3).trim();

LabelItems.push(RefillsLeft);

var SafetyCap = {};
SafetyCap.Name = "SafetyCap";
SafetyCap.Text = rawMessage.substr(1161,1).trim();

LabelItems.push(SafetyCap);

var DrugDescription = {};
DrugDescription.Name = "DrugDescription";
DrugDescription.Text = rawMessage.substr(1162,200).trim();

LabelItems.push(DrugDescription);

var ScanCode = {};
ScanCode.Name = "ScanCode";
ScanCode.Text = rawMessage.substr(1362,25).trim();

LabelItems.push(ScanCode);

var Price = {};
Price.Name = "Price";
Price.Text = rawMessage.substr(1387,10).trim();

LabelItems.push(Price);

var FamilyID = {};
FamilyID.Name = "FamilyID";
FamilyID.Text = rawMessage.substr(1397,25).trim();

LabelItems.push(FamilyID);

var PatientID = {};
PatientID.Name = "PatientID";
PatientID.Text = rawMessage.substr(1397,25).trim();

LabelItems.push(PatientID);

var Liquid = {};
Liquid.Name = "Liquid";
Liquid.Text = rawMessage.substr(1422,1).trim();

LabelItems.push(Liquid);

var Refrigerated = {};
Refrigerated.Name = "Refrigerated";
Refrigerated.Text = rawMessage.substr(1423,1).trim();

LabelItems.push(Refrigerated);

var PatientDOB = {};
PatientDOB.Name = "PatientDOB";
PatientDOB.Text = rawMessage.substr(1424,10).trim();

LabelItems.push(PatientDOB);

var PatientPhoneNumber = {};
PatientPhoneNumber.Name = "PatientPhoneNumber";
PatientPhoneNumber.Text = rawMessage.substr(1434,10).trim();

LabelItems.push(PatientPhoneNumber);

var PartialFill = {};
PartialFill.Name = "PartialFill";
PartialFill.Text = rawMessage.substr(1444,3).trim();

LabelItems.push(PartialFill);

var Warning1Long = {};
Warning1Long.Name = "Warning1Long";
Warning1Long.Text = rawMessage.substr(1447,200).trim();

LabelItems.push(Warning1Long);

var Warning2Long = {};
Warning2Long.Name = "Warning2Long";
Warning2Long.Text = rawMessage.substr(1647,200).trim();

LabelItems.push(Warning2Long);

var Warning3Long = {};
Warning3Long.Name = "Warning3Long";
Warning3Long.Text = rawMessage.substr(1847,200).trim();

LabelItems.push(Warning3Long);

var Warning4Long = {};
Warning4Long.Name = "Warning4Long";
Warning4Long.Text = rawMessage.substr(2047,200).trim();

LabelItems.push(Warning4Long);

var PrescriberAddress = {};
PrescriberAddress.Name = "PrescriberAddress";
PrescriberAddress.Text = rawMessage.substr(2247,60).trim();

LabelItems.push(PrescriberAddress);

var PrescriberPhoneNumber = {};
PrescriberPhoneNumber.Name = "PrescriberPhoneNumber";
PrescriberPhoneNumber.Text = rawMessage.substr(2307,10).trim();

LabelItems.push(PrescriberPhoneNumber);

var TotalPillsPrescribed = {};
TotalPillsPrescribed.Name = "TotalPillsPrescribed";
TotalPillsPrescribed.Text = rawMessage.substr(2317,6).trim();

LabelItems.push(TotalPillsPrescribed);

var TotalPillsRemaining = {};
TotalPillsRemaining.Name = "TotalPillsRemaining";
TotalPillsRemaining.Text = rawMessage.substr(2323,6).trim();

LabelItems.push(TotalPillsRemaining);

var PlanCode1 = {};
PlanCode1.Name = "PlanCode1";
PlanCode1.Text = rawMessage.substr(2330,8).trim();

LabelItems.push(PlanCode1);

var PlanCode2 = {};
PlanCode2.Name = "PlanCode2";
PlanCode2.Text = rawMessage.substr(2338,8).trim();

LabelItems.push(PlanCode2);

var PatientMiddleName ={};
PatientMiddleName.Name = "PatientMiddleName";
PatientMiddleName.Text = rawMessage.substr(2346,22).trim();

LabelItems.push(PatientMiddleName);

channelMap.put('LabelItems', LabelItems);

// Facility //

var Facilities = [];

var Facility = {};

Facility.Id = "103215";
Facility.Bed = null;
Facility.Cabinet = null;
Facility.Floor = null;
Facility.Name = "StoreX";
Facility.NursingStationId = null;
Facility.Room = null;
Facility.Unit = null;
Facility.Addresses = [];

var FacilityAddress = {};
FacilityAddress.Street1 = rawMessage.substr(865,60).trim();;
FacilityAddress.Street2 = "NA";
FacilityAddress.City = "NA";
FacilityAddress.State = "NA";
FacilityAddress.Zip = "NA";
FacilityAddress.Country = "US";
FacilityAddress.AddressType = "Primary";
FacilityAddress.Primary = true


Facility.Addresses.push(FacilityAddress);

Facilities.push(Facility);


// Med //
var Med = {};
Med.Id = rawMessage.substr(109,12).trim();
Med.Name = rawMessage.substr(121,50).trim();
Med.MedIdType = IsNullOrEmpty(rawMessage.substr(513,4).trim()) ? 0 : rawMessage.substr(513,4).trim(); //DrugClass
Med.Description = rawMessage.substr(1162,200).trim();
Med.InventorySelector = "";

channelMap.put('Med', Med);

// Doses //
var Doses = [];
var Dose = {};

channelMap.put('Doses', Doses);

// HOA //

var HOA = {};

// Scripts //

var Script = {};
Script.Action = ProcessScriptAction(rawMessage.substr(852,1).trim());
Script.Packaging = DoesHOAExists(HOA) === true ? 1:5; //Adherence 1; Blister 2; Manual 3; Pouch 4; Vial 5;
Script.RxNumber = rawMessage.substr(39,15).trim(); ///39,15....14,15
Script.RefillNumber = rawMessage.substr(472,3).trim();
Script.TransactionId = Script.RxNumber + Script.RefillNumber + "00";
Script.Barcode = Script.TransactionId
Script.DispenseQuantity = rawMessage.substr(171,5).trim();

var BatchId = UUIDGenerator.getUUID();
Script.BatchId = BatchId;

Script.SequenceNumber = "1";
Script.PatientId = Patient.Id;
Script.FacilityId = null;//Facility.Id;
Script.Med = Med;
Script.DAW = rawMessage.substr(2329,1).trim() === "0" ? false : true;
Script.DaysSupply = rawMessage.substr(510,3).trim() == "" ? "0" : rawMessage.substr(510,3).trim();
Script.HOA = HOA;
Script.LabelItems = LabelItems;
Script.RefillsRemaining = rawMessage.substr(1158,3).trim();
Script.RefillsTotal = parseInt(Script.RefillNumber) + parseInt(Script.RefillsRemaining);
Script.PartialNumber = "0";
Script.RxExpirationDate = FormateDate(rawMessage.substr(494,8).trim());
Script.Urgency = CalculateUrgency(rawMessage.substr(843,5).trim()).toString();

channelMap.put('Script', Script);

var Batch = {};

var Scripts = [];
Scripts.push(Script);
var Patients = [];
Patients.push(Patient);



Batch.Id = BatchId;
Batch.TransmissionId = "";
Batch.ScriptCount = Scripts.length;
Batch.SourceTerminal = rawMessage.substr(838,5);
Batch.Scripts = Scripts;
Batch.Facilities = [];//Facilities;
Batch.Patients = Patients;

channelMap.put('Batch', Batch);

//logger.info(JSON.stringify(Batch));