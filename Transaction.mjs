import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    provider: { type: String, required: true },
    payeeAccount: { type: String, required: true },
    swiftCode: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Transaction', TransactionSchema);
