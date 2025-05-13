import { Schema, model, models } from 'mongoose';

const addressSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
    country: { type: String, required: true },
});

const itemSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
});

const invoiceSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        invoiceNumber: { type: String, required: true, unique: true },
        paymentDue: { type: Date, required: true },
        description: { type: String, required: true },
        paymentTerms: { type: Number, required: true },
        clientName: { type: String, required: true },
        clientEmail: { type: String, required: true },
        status: {
            type: String,
            enum: ['draft', 'pending', 'paid'],
            default: 'draft',
        },
        senderAddress: addressSchema,
        clientAddress: addressSchema,
        items: [itemSchema],
        total: { type: Number, required: true },
    },
    { timestamps: true }
);

invoiceSchema.pre('save', function (next) {
    if (this.isNew) {
        this.invoiceNumber = `INV-${Date.now()}`;
    }
    next();
});

export const Invoice = models.Invoice || model('Invoice', invoiceSchema);
