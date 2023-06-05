// ============================================================ to-do list
// 0 = not started
// 1 = started
// 2 = finished (untested)
// 3 = finished (tested)
//
// 0 - find/define input section to precent duplicates
// 0 - autofill funciton
// 0 - save/load previous jobs
// 0 - gui for the addon
// 0 - check page for how many input categoe
// 2 - save/load jobs enterred
// 2 - funciton to create unlimited jobs
// 0 - a generic job where on load, if not found asks user for general information like name, gender, etc etc
// 0 - a way for the user to download/upload file to quickly move from machine to machine
// 0 - add a date formate changer. ie, june 4th 2000 -> 00/06/04 || 00/06/04 -> jun, 04, 2000
// 1 - add a class for a the person applying, with information such as: name, DoB, gender, emergency contact, etc
// 1 - add a class for education such as highschool, college, etc etc
// 1 - add a class for certifiations, such as: start date, end date, name, institute, expirey date, etc etc
// 0 - add a check for when entering something and prompt user if they would like to format it



// ============================================================ class decloration start

class Credential {
    constructor (
        dateEffective, 
            dateExperation,
        description,
        institution,
    ){
        this.dateEffective = dateEffective;
            this.dateExperation = dateExperation;
        this.description = description;
        this.institution = institution;
    }
}

class Education {
    constructor (
        areaOfStudy,
        dateStart,
            dateEnd,
        degreeType, //associate, bachelors, certificate, deploma, doctorate, HSD, masters, other, trade
        description,
        institution, 
    ){
        this.areaOfStudy = areaOfStudy;
        this.dateStart = dateStart;
            this.dateEnd = dateEnd;
        this.degreeType = degreeType; //associate, bachelors, certificate, deploma, doctorate, HSD, masters, other, trade
        this.description = desription;
        this.institution = institution; 
    }
}

class Job {
    constructor(
        achievements,
        dateStart, 
            dateEnd,
        description, 
        isCurrentPosition, 
        jobTitle, 
        locationCountry, 
            locationSubnational, 
            locationMunicipality,
            locationUnitNum,
        publicOrPrivate, 
        position, 
        promotions,
        reasonsForLeaving,
        references,
        skillsAndQualifications
    ){
        this.achievements = achievements;
        this.dateStart = dateStart; 
            this.dateEnd = dateEnd;
        this.description = description; 
        this.isCurrentPosition = isCurrentPosition; 
        this.jobTitle = jobTitle; 
        this.locationCountry = locationCountry; 
            this.locationSubnational = locationSubnational; 
            this.locationMunicipality = locationMunicipality;
            this.locationUnitNum = locationUnitNum;
        this.publicOrPrivate = publicOrPrivate; 
        this.position = position; 
        this.promotions = promotions;
        this.reasonForLeaving = reasonForLeaving;
        this.references = references;
        this.skillsAndQualifications = skillsAndQualifications;
    }

    method() {}
}


class Person {
    constructor (
        dateOfBirth,
        emergencyContacts,
        gender,
        locationCountry,
            locationSubnational,
            locationMunicipality,
            locationUnitNum,
            locationPostalCode,
        nameFirstLegal,
            nameMiddleLegal,
            nameLastLegal,
        nameFirstPrefered,
            nameMiddlePrefered,
            nameLastPrefered,
        phoneBusiness,
            phoneMobile,
            phoneHome,
        preferredPhone
    ){
        this.dateOfBirth = dateOfBirth;
        this.emergencyContacts = emergencyContacts;
        this.gender = gender;
        this.locationCountry = locationCountry;
            this.locationSubnational = locationSubnational;
            this.locationMunicipality = locationMunicipality;
            this.locationUnitNum = locationUnitNum;
            this.locationPostalCode = locationPostalCode;
        this.nameFirstLegal = nameFirstLegal;
            this.nameMiddleLegal = nameMiddleLegal;
            this.nameLastLegal = nameLastLegal;
        this.nameFirstPrefered = nameFirstPrefered;
            this.nameMiddlePrefered = nameMiddlePrefered;
            this.nameLastPrefered = nameLastPrefered;
        this.phoneBusiness = phoneBusiness;
            this.phoneMobile = phoneMobile;
            this.phoneHome = phoneHome;
        this.preferredPhone = preferredPhone;
    }
}



// ============================================================ function decloration start

// Function to create a custom job based on user input
function createCustomJob() {
    let dateFrom = prompt("Enter date from:");
    let dateTo = prompt("Enter date to:");
    let description = prompt("Enter job description:");
    let isCurrentPosition = confirm("Is it a current position?");
    let publicOrPrivate = prompt("Enter public or private:");
    let position = prompt("Enter job position:");
    let name = prompt("Enter job name:");

    let job = new Job(dateFrom, dateTo, description, isCurrentPosition, publicOrPrivate, position, name);

    // Generate a unique ID for the job, e.g., using a timestamp
        //let jobId = Date.now().toString();
    let jobId = prompt("Enter a unique name for this job, ie: Abc2000");
    jobMap.set(jobId, job);
}

function init() {
    if (localStorage.getItem('jobMap') != null) {
        jobMap = new Map(JSON.parse(localStorage.getItem('jobMap')));
    }
    else {
        jobMap = new Map();
    }
}

function saveJobs() {
    const jsonString = JSON.stringify(Array.from(jobMap.entries()));
    localStorage.setItem('jobMap', jsonString);
}




// ============================================================ Script start

let jobMap;

console.log('raf loaded!');

function pingTest() {
    console.log('hewwo!');
}
