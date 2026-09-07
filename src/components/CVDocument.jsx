import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 45,
    fontFamily: "Helvetica",
    color: "#333333",
    backgroundColor: "#FFFFFF",
  },

  header: {
    borderBottom: "2 solid #5B7C99",
    paddingBottom: 12,
    marginBottom: 18,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2F4F66",
    marginBottom: 6,
  },

  contact: {
    fontSize: 10,
    color: "#666666",
  },

  section: {
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#5B7C99",
    marginBottom: 7,
    textTransform: "uppercase",
  },

  sectionLine: {
    borderBottom: "1 solid #D9E1E7",
    marginBottom: 9,
  },

  item: {
    marginBottom: 9,
  },

  itemTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 3,
  },

  itemText: {
    fontSize: 10,
    color: "#555555",
    marginBottom: 2,
  },

  duration: {
    fontSize: 9,
    color: "#777777",
  },

  responsibility: {
    fontSize: 10,
    color: "#555555",
    marginTop: 3,
    lineHeight: 1.4,
  },
});

export default function CVDocument({ generalInfo, education, experience }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {generalInfo.firstName} {generalInfo.lastName}
          </Text>

          <Text style={styles.contact}>
            {generalInfo.email} • {generalInfo.phonePrefix}{" "}
            {generalInfo.phoneNum}
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.sectionLine} />

          <View style={styles.item}>
            <Text style={styles.itemTitle}>{education.university}</Text>

            <Text style={styles.itemText}>{education.major}</Text>

            <Text style={styles.duration}>{education.duration} years</Text>
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.sectionLine} />

          <View style={styles.item}>
            <Text style={styles.itemTitle}>{experience.jobTitle}</Text>

            <Text style={styles.itemText}>{experience.companyName}</Text>

            <Text style={styles.duration}>{experience.workDuration}</Text>

            <Text style={styles.responsibility}>
              {experience.responsibility}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
