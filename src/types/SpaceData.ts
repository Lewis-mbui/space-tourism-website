import type CrewMember from "./CrewMember";
import type Destination from "./Destination";
import type Technology from "./Technology";

export default interface SpaceData {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
}
