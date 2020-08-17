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
