import { StyleSheet } from 'react-native';
import { COLORS } from '../Utils/Colors';

export const AmountPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: 32,
    paddingHorizontal: 24,
  },

  amountContainer: {
    marginTop: 16,
  },

  payeeContainer: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 16,
  },

  payeeLabel: {
    color: COLORS.textMuted,
    fontSize: 12,
    letterSpacing: 0.3,
    marginBottom: 2,
  },

  payeeName: {
    color: COLORS.textMain,
    fontSize: 18,
    fontWeight: '600',
  },

  label: {
    color: COLORS.textMuted,
    fontSize: 14,
    marginBottom: 8,
    marginTop: 20,
  },

  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },

  rupee: {
    fontSize: 34,
    color: COLORS.textMuted,
    fontWeight: '600',
    marginRight: 4,
  },

  input: {
    fontSize: 36,
    color: COLORS.textMain,
    fontWeight: '700',
    minWidth: 80,
    textAlign: 'left',
    padding: 0,
  },

  payButton: {
    marginTop: 28,
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOpacity: 0.22,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  payButtonDisabled: {
    backgroundColor: COLORS.cardSoft,
    shadowOpacity: 0,
    elevation: 0,
  },

  payText: {
    color: COLORS.textMain,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
