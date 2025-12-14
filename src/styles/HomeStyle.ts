import { StyleSheet } from 'react-native';
import { COLORS } from '../Utils/Colors';
export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    color: COLORS.textMuted,
    fontWeight: '500',
  },

  settings: {
    fontSize: 18,
    color: COLORS.textMuted,
  },

  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    gap: 12,
  },

  scanButton: {
    flex: 1.6,
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    paddingVertical: 28,
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
  },

  scanText: {
    color: '#001018',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.4,
  },

  sideButton: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 14,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },

  sideText: {
    color: COLORS.textMain,
    fontSize: 14,
    fontWeight: '500',
  },

  recent: {
    marginTop: 40,
    flex: 1,
  },

  recentTitle: {
    color: COLORS.textMuted,
    fontSize: 14,
    marginBottom: 12,
  },

  txItem: {
    backgroundColor: COLORS.cardSoft,
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,

    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  txAmount: {
    color: COLORS.textMain,
    fontSize: 16,
    fontWeight: '600',
  },

  txSub: {
    color: COLORS.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
});
