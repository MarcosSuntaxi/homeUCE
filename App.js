import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      {/* Header superior */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="#fff" style={{ marginLeft: 8 }} />
        <View style={styles.headerTitleContainer}>
          <Image source={require('./assets/icon.png')} style={styles.logo} />
          <Text style={styles.headerTitle}>UCE</Text>
          <Text style={styles.headerSubtitle}>Sistema Académico</Text>
        </View>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image source={require('./assets/icon.png')} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Bienvenida y búsqueda */}
        <View style={styles.section}>
          <Text style={styles.welcome}>Bienvenido, Marcos</Text>
          <Text style={styles.semester}>Semestre actual: 2024-2025</Text>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={20} color="#aaa" />
            <TextInput placeholder="Buscar..." style={styles.searchInput} placeholderTextColor="#aaa" />
          </View>
        </View>
        {/* Promedio General */}
        <View style={[styles.card, styles.cardShadow, {overflow: 'hidden'}]}>
          <View style={styles.cardHeaderRow}>
            <MaterialCommunityIcons name="star-circle" size={28} color="#ffd700" style={{marginRight: 8}} />
            <Text style={styles.cardTitle}>Promedio General</Text>
            <View style={styles.badge}><Text style={styles.badgeText}>TOP 10%</Text></View>
          </View>
          <View style={styles.rowCenter}>
            <Text style={styles.grade}>17.05</Text>
            <Text style={styles.gradeOutOf}>/20</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBar, { width: '71%' }]} />
          </View>
          <Text style={styles.progressLabel}>71.3%</Text>
          <Text style={styles.cardSubLabel}>¡Sigue así! Estás por encima del promedio nacional.</Text>
          <View style={styles.statsRow}>
            <View style={styles.statsItem}><MaterialIcons name="trending-up" size={18} color="#4e8cff" /><Text style={styles.statsLabel}>+0.15 este semestre</Text></View>
            <View style={styles.statsItem}><MaterialIcons name="emoji-events" size={18} color="#ffd700" /><Text style={styles.statsLabel}>Reconocimiento</Text></View>
          </View>
          <View style={styles.divider} />
          <Text style={styles.cardDesc}>Tu promedio se calcula con base en todas tus materias cursadas. Mantén tu rendimiento para acceder a becas y reconocimientos.</Text>
        </View>
        {/* Eficiencia académica */}
        <View style={[styles.card, styles.cardShadow, {overflow: 'hidden'}]}>
          <View style={styles.cardHeaderRow}>
            <MaterialCommunityIcons name="chart-arc" size={28} color="#4e8cff" style={{marginRight: 8}} />
            <Text style={styles.cardTitle}>Eficiencia académica</Text>
            <View style={[styles.badge, {backgroundColor:'#e0f7fa'}]}><Text style={[styles.badgeText, {color:'#2563c9'}]}>ALTA</Text></View>
          </View>
          <View style={styles.semicircleContainer}>
            <MaterialCommunityIcons name="speedometer" size={40} color="#4e8cff" />
            <Text style={styles.semicircleText}>Completado</Text>
            <Text style={styles.semicirclePercent}>92%</Text>
          </View>
          <Text style={styles.credits}>220/240 créditos</Text>
          <Text style={styles.cardSubLabel}>¡Excelente avance! Solo faltan 20 créditos.</Text>
          <View style={styles.statsRow}>
            <View style={styles.statsItem}><MaterialIcons name="check-circle" size={18} color="#43a047" /><Text style={styles.statsLabel}>Créditos aprobados</Text></View>
            <View style={styles.statsItem}><MaterialIcons name="hourglass-bottom" size={18} color="#ffb347" /><Text style={styles.statsLabel}>En curso: 12</Text></View>
          </View>
          <View style={styles.divider} />
          <Text style={styles.cardDesc}>La eficiencia académica mide tu avance respecto al plan de estudios. Procura mantenerla alta para graduarte a tiempo.</Text>
        </View>
        {/* Asignaturas */}
        <View style={[styles.card, styles.cardShadow, {overflow: 'hidden'}]}>
          <View style={styles.cardHeaderRow}>
            <MaterialCommunityIcons name="book-open-page-variant" size={28} color="#ffb347" style={{marginRight: 8}} />
            <Text style={styles.cardTitle}>Asignaturas</Text>
            <View style={[styles.badge, {backgroundColor:'#ffe0b2'}]}><Text style={[styles.badgeText, {color:'#ff9800'}]}>8 TOTAL</Text></View>
          </View>
          <View style={styles.pieContainer}>
            <MaterialCommunityIcons name="chart-donut" size={40} color="#ffb347" />
            <View style={styles.pieLabels}>
              <Text style={styles.pieLabel}><Text style={{ color: '#4e8cff' }}>4</Text> Aprobadas</Text>
              <Text style={styles.pieLabel}><Text style={{ color: '#ffb347' }}>2</Text> En progreso</Text>
              <Text style={styles.pieLabel}><Text style={{ color: '#ff6f61' }}>2</Text> Extracurricular</Text>
            </View>
          </View>
          <View style={styles.subjectsRow}>
            <View style={styles.subjectBadge}><MaterialIcons name="check-circle" size={16} color="#4e8cff" /><Text style={styles.subjectBadgeText}>Aprobadas</Text></View>
            <View style={styles.subjectBadge}><MaterialIcons name="hourglass-bottom" size={16} color="#ffb347" /><Text style={styles.subjectBadgeText}>En progreso</Text></View>
            <View style={styles.subjectBadge}><MaterialIcons name="star" size={16} color="#ff6f61" /><Text style={styles.subjectBadgeText}>Extracurricular</Text></View>
          </View>
          <View style={styles.divider} />
          <View style={styles.subjectsDetailsRow}>
            <View style={styles.subjectDetailBox}>
              <Text style={styles.subjectDetailTitle}>Matemáticas</Text>
              <Text style={styles.subjectDetailStatus}>Aprobada</Text>
            </View>
            <View style={styles.subjectDetailBox}>
              <Text style={styles.subjectDetailTitle}>Programación</Text>
              <Text style={styles.subjectDetailStatus}>En progreso</Text>
            </View>
            <View style={styles.subjectDetailBox}>
              <Text style={styles.subjectDetailTitle}>Inglés</Text>
              <Text style={styles.subjectDetailStatus}>Extracurricular</Text>
            </View>
          </View>
          <Text style={styles.cardDesc}>Consulta el detalle de tus asignaturas y su estado. Mantente al día con tus materias para evitar retrasos.</Text>
        </View>
        {/* Accesos rápidos */}
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickAccessBtn}>
            <MaterialIcons name="grade" size={28} color="#4e8cff" />
            <Text style={styles.quickAccessText}>Notas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessBtn}>
            <MaterialIcons name="schedule" size={28} color="#4e8cff" />
            <Text style={styles.quickAccessText}>Horarios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessBtn}>
            <FontAwesome5 name="users" size={24} color="#4e8cff" />
            <Text style={styles.quickAccessText}>Paralelos y Horarios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessBtn}>
            <MaterialIcons name="credit-card" size={28} color="#4e8cff" />
            <Text style={styles.quickAccessText}>Carnet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessBtn}>
            <Entypo name="map" size={28} color="#4e8cff" />
            <Text style={styles.quickAccessText}>Mapas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessBtn}>
            <MaterialCommunityIcons name="map-marker" size={28} color="#4e8cff" />
            <Text style={styles.quickAccessText}>Mapa de Aulas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessBtn}>
            <MaterialIcons name="school" size={28} color="#4e8cff" />
            <Text style={styles.quickAccessText}>Titulación</Text>
          </TouchableOpacity>
        </View>
        {/* Perfil y calendario */}
        <View style={styles.profileCard}>
          <Image source={require('./assets/icon.png')} style={styles.profileAvatar} />
          <Text style={styles.profileName}> Marcos Suntaxi</Text>
          <Text style={styles.profileCareer}>Ingeniería en Sistemas{"\n"}10mo Semestre</Text>
          <View style={styles.profileInfoRow}>
            <Text style={styles.profileInfo}>ID: 2015489654</Text>
            <Text style={styles.profileInfo}>Facultad: Ingeniería</Text>
            <Text style={styles.profileInfo}>Estado: Activo</Text>
          </View>
          <TouchableOpacity style={styles.profileBtn}>
            <Text style={styles.profileBtnText}>Ver perfil completo</Text>
          </TouchableOpacity>
        </View>
        {/* Calendario académico */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Calendario Académico</Text>
          <View style={styles.calendarRow}>
            <View style={styles.calendarItem}><Text style={styles.calendarDate}>ABR 15</Text><Text style={styles.calendarLabel}>Inicio de exámenes</Text></View>
            <View style={styles.calendarItem}><Text style={styles.calendarDate}>MAY 02</Text><Text style={styles.calendarLabel}>Período</Text></View>
            <View style={styles.calendarItem}><Text style={styles.calendarDate}>MAY 20</Text><Text style={styles.calendarLabel}>Entrega de proyectos</Text></View>
            <View style={styles.calendarItem}><Text style={styles.calendarDate}>JUN 10</Text><Text style={styles.calendarLabel}>Exámenes finales</Text></View>
          </View>
        </View>
        {/* Anuncios */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Anuncios</Text>
          <View style={styles.announcement}><Ionicons name="alert-circle" size={20} color="#4e8cff" /><Text style={styles.announcementText}>Académico/Curso Virtual: Ya está disponible el curso virtual de la semana.</Text></View>
          <View style={styles.announcement}><Ionicons name="information-circle" size={20} color="#ffb347" /><Text style={styles.announcementText}>Importante: Actualización del sistema el viernes 22 de abril de 2024 a las 22:00.</Text></View>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Image source={require('./assets/icon.png')} style={styles.footerLogo} />
          <Text style={styles.footerTitle}>Universidad Central Del Ecuador</Text>
          <View style={styles.footerLinks}>
            <FontAwesome5 name="facebook" size={20} color="#fff" style={styles.footerIcon} />
            <FontAwesome5 name="twitter" size={20} color="#fff" style={styles.footerIcon} />
            <FontAwesome5 name="instagram" size={20} color="#fff" style={styles.footerIcon} />
            <FontAwesome5 name="linkedin" size={20} color="#fff" style={styles.footerIcon} />
          </View>
          <Text style={styles.footerLinksText}>Enlaces Rápidos: Matrícula, Pensum, Prácticas, Servicios, Vinculación</Text>
          <Text style={styles.footerLinksText}>Servicios: Correo institucional, Web UCE, Biblioteca digital, Vida estudiantil</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#eaf2fb' },
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2563c9', paddingTop: 36, paddingBottom: 12, paddingHorizontal: 8 },
  headerTitleContainer: { flex: 1, alignItems: 'center' },
  logo: { width: 32, height: 32, borderRadius: 16, marginBottom: 2 },
  headerTitle: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  headerSubtitle: { color: '#dbeafe', fontSize: 10, marginTop: -2 },
  avatarContainer: { width: 36, height: 36, borderRadius: 18, overflow: 'hidden', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  scroll: { flex: 1 },
  section: { padding: 16, paddingBottom: 0 },
  welcome: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  semester: { fontSize: 13, color: '#2563c9', marginBottom: 10 },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f5f9', borderRadius: 8, paddingHorizontal: 10, marginBottom: 8 },
  searchInput: { flex: 1, height: 36, marginLeft: 8, color: '#222' },
  card: { backgroundColor: '#fff', borderRadius: 12, margin: 12, padding: 16, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  cardTitle: { fontWeight: 'bold', fontSize: 15, color: '#2563c9', marginBottom: 8 },
  rowCenter: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 4 },
  grade: { fontSize: 28, fontWeight: 'bold', color: '#ff6f61' },
  gradeOutOf: { fontSize: 16, color: '#888', marginLeft: 2 },
  progressBarBg: { height: 8, backgroundColor: '#e5e7eb', borderRadius: 4, marginVertical: 6 },
  progressBar: { height: 8, backgroundColor: '#ff6f61', borderRadius: 4 },
  progressLabel: { fontSize: 12, color: '#888', alignSelf: 'flex-end' },
  semicircleContainer: { alignItems: 'center', marginVertical: 8 },
  semicircleText: { fontSize: 13, color: '#2563c9', marginTop: 2 },
  semicirclePercent: { fontSize: 22, fontWeight: 'bold', color: '#4e8cff' },
  credits: { fontSize: 13, color: '#888', alignSelf: 'center' },
  pieContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  pieLabels: { marginLeft: 12 },
  pieLabel: { fontSize: 13, marginBottom: 2 },
  quickAccessContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', margin: 12 },
  quickAccessBtn: { width: '48%', backgroundColor: '#f1f5f9', borderRadius: 10, alignItems: 'center', padding: 12, marginBottom: 10, flexDirection: 'row' },
  quickAccessText: { marginLeft: 10, color: '#2563c9', fontWeight: 'bold', fontSize: 14 },
  profileCard: { backgroundColor: '#fff', borderRadius: 12, margin: 12, padding: 16, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  profileAvatar: { width: 64, height: 64, borderRadius: 32, marginBottom: 8 },
  profileName: { fontWeight: 'bold', fontSize: 18, color: '#2563c9' },
  profileCareer: { fontSize: 13, color: '#888', textAlign: 'center', marginBottom: 8 },
  profileInfoRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 8 },
  profileInfo: { fontSize: 12, color: '#2563c9', marginHorizontal: 6 },
  profileBtn: { backgroundColor: '#2563c9', borderRadius: 8, paddingHorizontal: 18, paddingVertical: 6 },
  profileBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  calendarRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 8 },
  calendarItem: { width: '48%', backgroundColor: '#eaf2fb', borderRadius: 8, padding: 8, marginBottom: 8 },
  calendarDate: { fontWeight: 'bold', color: '#2563c9', fontSize: 14 },
  calendarLabel: { color: '#222', fontSize: 12 },
  announcement: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
  announcementText: { marginLeft: 8, color: '#2563c9', fontSize: 13 },
  footer: { backgroundColor: '#2563c9', alignItems: 'center', padding: 18, borderTopLeftRadius: 18, borderTopRightRadius: 18, marginTop: 18 },
  footerLogo: { width: 36, height: 36, borderRadius: 18, marginBottom: 4 },
  footerTitle: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginBottom: 6 },
  footerLinks: { flexDirection: 'row', marginBottom: 6 },
  footerIcon: { marginHorizontal: 6 },
  footerLinksText: { color: '#dbeafe', fontSize: 11, textAlign: 'center', marginBottom: 2 },
  cardShadow: { shadowColor: '#000', shadowOpacity: 0.10, shadowRadius: 8, elevation: 6 },
  cardHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  badge: { backgroundColor: '#ffd700', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2, marginLeft: 'auto' },
  badgeText: { color: '#fff', fontWeight: 'bold', fontSize: 11 },
  cardSubLabel: { color: '#888', fontSize: 12, marginTop: 4, fontStyle: 'italic' },
  subjectsRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 },
  subjectBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f5f9', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2, marginHorizontal: 2 },
  subjectBadgeText: { marginLeft: 4, fontSize: 12, color: '#2563c9', fontWeight: 'bold' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  statsItem: { flexDirection: 'row', alignItems: 'center' },
  statsLabel: { marginLeft: 4, fontSize: 12, color: '#2563c9' },
  divider: { height: 1, backgroundColor: '#e0e0e0', marginVertical: 10, borderRadius: 1 },
  cardDesc: { color: '#666', fontSize: 12, marginTop: 2, marginBottom: 2 },
  subjectsDetailsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  subjectDetailBox: { backgroundColor: '#f1f5f9', borderRadius: 8, padding: 8, alignItems: 'center', width: '32%' },
  subjectDetailTitle: { fontWeight: 'bold', color: '#2563c9', fontSize: 13 },
  subjectDetailStatus: { fontSize: 11, color: '#888', marginTop: 2 },
});
