import strings from "../localization";

const RelationshipType = {
  Friendship: 1,
  Marriage: 2,
  Romance: 3,
  Relationship: 4
};

export default RelationshipType;

export function getRelationshipTypesList() {
  return [
    {
      name: strings.relationship.friendship,
      value: RelationshipType.Friendship
    },
    {
      name: strings.relationship.marriage,
      value: RelationshipType.Marriage
    },
    {
      name: strings.relationship.romance,
      value: RelationshipType.Romance
    },
    {
      name: strings.relationship.relationship,
      value: RelationshipType.Relationship
    }
  ];
}

export function getRelationshipTypesStrings(...values) {
  let resultString = "";

  for (let i = 0; i < values[0].length; i++) {
    if (values[0][i] === 1) {
      resultString += strings.relationship.friendship;
    }
    if (values[0][i] === 2) {
      if (resultString.length != 0) {
        resultString += ", ";
      }
      resultString += strings.relationship.marriage;
    }
    if (values[0][i] === 3) {
      if (resultString.length != 0) {
        resultString += ", ";
      }
      resultString += strings.relationship.romance;
    }
    if (values[0][i] === 4) {
      if (resultString.length != 0) {
        resultString += ", ";
      }
      resultString += strings.relationship.relationship;
    }
  }
  return resultString;
}
